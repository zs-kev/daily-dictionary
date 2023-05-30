import localFont from "next/font/local";

const inconsolata = localFont({
  src: "./fonts/Inconsolata-VariableFont.ttf",
  variable: "--font-inconsolata",
});

const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
});

const lora = localFont({
  src: "./fonts/Lora-VariableFont.ttf",
  variable: "--font-lora",
});

const lora_italic = localFont({
  src: "./fonts/Lora-Italic-VariableFont.ttf",
  variable: "--font-lora_italic",
});

export { inconsolata, inter, lora, lora_italic };
