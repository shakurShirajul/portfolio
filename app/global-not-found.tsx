import { Gabarito, Inter, Pacifico } from "next/font/google";
import "./globals.css";
import NotFound, { metadata as notFoundMetadata } from "./(main)/not-found";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});
const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" });

export const metadata = {
  ...notFoundMetadata,
  metadataBase: new URL(SITE_URL),
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${pacifico.variable} ${gabarito.variable} antialiased`}
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NotFound />
        </ThemeProvider>
      </body>
    </html>
  );
}
