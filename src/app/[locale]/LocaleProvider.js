"use client";

import { NextIntlClientProvider } from "next-intl";

export default function LocaleProvider({ children, locale, messages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
