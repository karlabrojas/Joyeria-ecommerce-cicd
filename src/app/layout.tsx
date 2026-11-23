import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joyería Ecommerce",
  description: "Plataforma web para la compra y venta de accesorios y joyería.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
