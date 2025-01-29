import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Whatsapp from "@/Components/whatsap/Whatsapp";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SANEA GROUP",
  description: "Somos una empresa peruana con amplia experiencia en servicios de saneamiento ambiental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Header/>
          {children}
          <Whatsapp/>
          <Footer/>

        </div>
        
      </body>
    </html>
  );
}
