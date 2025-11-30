import "./globals.css";

export const metadata = {
  title: "Hiago ♥ Kamila — 1 Ano",
  description: "Nosso site de 1 ano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
