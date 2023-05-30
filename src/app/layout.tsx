import Header from "@/layouts/header/Header";
import { Providers } from "@/lib/providers/Providers";
import { inconsolata, inter, lora, lora_italic } from "../styles/fonts";
import "./globals.css";

export const metadata = {
  title: "Daily Dictionary",
  description: "Online english dictionary to look up any word",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inconsolata.variable} ${inter.variable} ${lora.variable} ${lora_italic.variable}`}
      style={{
        fontFamily: "var(--global-font-family)",
        fontStyle: "normal",
      }}
    >
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
