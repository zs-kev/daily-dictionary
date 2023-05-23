import { Providers } from "@/lib/providers/Providers";
import { Inconsolata, Inter, Lora, LoraItalic } from "../styles/fonts";
import "./globals.css";

const fonts = `${Inconsolata} ${Inter} ${Lora} ${LoraItalic}`;

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
    <html lang="en" suppressHydrationWarning>
      <body className={fonts}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
