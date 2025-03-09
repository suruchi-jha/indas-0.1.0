import { Poppins, Roboto_Mono } from "next/font/google"; // Import Poppins and Roboto Mono
import "./globals.css";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include the weights you need
  variable: "--font-poppins",
});

// Configure Roboto Mono
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// Metadata for the website
export const metadata = {
  title: "Indas - Earthquake Detection & Emergency Guidance",
  description:
    "Indas is a cutting-edge system designed to detect earthquakes and guide people to safety during emergencies.",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}