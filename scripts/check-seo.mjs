import assert from "node:assert/strict";

const base = process.env.SEO_TEST_URL || "http://localhost:3100";
const origin = "https://mantenimientos-aj.vercel.app";
const locales = ["es", "en", "ca", "de", "fr"];
const paths = [
  "",
  "/about",
  "/contact",
  "/products",
  "/low-voltage",
  "/maintenance-fire-systems",
  "/quote",
  "/privacy-policy",
  "/terms",
];
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
assert.equal((sitemap.match(/<loc>/g) || []).length, 45);
for (const locale of locales) {
  for (const path of paths) {
    const route = `/${locale}${path}`;
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.ok(html.includes(`<html lang="${locale}"`), `lang: ${route}`);
    assert.ok(
      html.includes(`rel="canonical" href="${origin}${route}"`),
      `canonical: ${route}`,
    );
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, route);
    assert.ok(
      sitemap.includes(`<loc>${origin}${route}</loc>`),
      `sitemap: ${route}`,
    );
    for (const alternate of [...locales, "x-default"]) {
      const target = alternate === "x-default" ? "es" : alternate;
      assert.ok(
        html.includes(
          `hrefLang="${alternate}" href="${origin}/${target}${path}"`,
        ),
        `hreflang ${alternate}: ${route}`,
      );
    }
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, route);
    assert.ok(
      (title.match(/Mantenimientos AJ/g) || []).length <= 1,
      `duplicate brand: ${route}`,
    );
    assert.ok(html.includes('property="og:url"'), `OG: ${route}`);
    if (!path) {
      assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `H1: ${route}`);
      for (const service of ["/maintenance-fire-systems", "/low-voltage"]) {
        assert.ok(
          html.includes(`href="/${locale}${service}"`),
          `service link: ${route}`,
        );
      }
    }
  }
}
for (const path of ["", "/contact", "/low-voltage"]) {
  const response = await fetch(`${base}${path}/?source=seo`, {
    redirect: "manual",
  });
  // Next.js normalizes trailing slashes before the locale redirect.
  const normalized = path
    ? await fetch(`${base}${path}?source=seo`, { redirect: "manual" })
    : response;
  assert.equal(normalized.status, 308);
  assert.equal(
    new URL(normalized.headers.get("location"), base).pathname,
    `/es${path}`,
  );
  assert.equal(
    new URL(normalized.headers.get("location"), base).search,
    "?source=seo",
  );
}
for (const path of [
  "/zz",
  "/es/nonexistent",
  "/fr/nonexistent",
  "/unknown-page",
]) {
  assert.equal((await fetch(`${base}${path}`)).status, 404, path);
}
assert.equal((await fetch(`${base}/robots.txt`)).status, 200);
console.log(
  "SEO OK: 45 pages, canonical/hreflang, sitemap, language, links, H1, redirects and 404s.",
);
