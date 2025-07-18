// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#d32f2f" />
      </head>
      <body>{children}</body>
    </html>
  );
}
