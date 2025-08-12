import "./globals.css";

export const metadata = {
  title: "Wiki Tech - iRice",
  description: "Criar uma Mini Wiki de Tecnologia usando Next.js 15 (com App Router), contendo páginas com explicações técnicas e pesquisas sobre tecnologias do mercado.",
  icons: {
    icon: "/icons/icons8-configuração.gif",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
