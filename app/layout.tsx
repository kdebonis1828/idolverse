import "./globals.css";
import { inter } from "./ui/fonts";
import {Navbar} from "./ui/components/Navbar";
import { Footer } from "./ui/components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[url('/idols/mainbg.png')] bg-top-right  min-h-screen `}
      >
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
