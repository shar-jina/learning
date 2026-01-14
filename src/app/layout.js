import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kids Learning Platform | Smart Education for Children",
  description:
    "A modern educational platform focused on helping children learn better through fun, interactive programs.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "antialiased">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
