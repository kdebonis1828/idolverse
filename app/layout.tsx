import "./globals.css";
import { inter } from "./ui/fonts";
import Navbar from "./ui/components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark:bg-black/95  min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
