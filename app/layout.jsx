export const metadata = {
  title: "Brenda Giambelluca",
  description: "Mi portfolio",
  authors: "Brenda Giambelluca",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/x-icon"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-ar">
      <body>
        {children}
      </body>
    </html>
  );
}
