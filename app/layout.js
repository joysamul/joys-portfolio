import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});



export const metadata = {
  title: "Joy Samul | Full Stack Developer",
  description: "Portfolio of Joy Samul, frontend web developer and designer.",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body className={`${outfit.variable} ${ovo.variable} antialiased`}>
{children}
</body>
</html>
);

}