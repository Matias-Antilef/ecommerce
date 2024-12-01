import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";

export const metadata: Metadata = {
  title: "DeTodito",
  description: "Amazon < DeTodito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar logo="DeTodito" />
        <div className="pt-[50px] max-w-[1500px] m-auto ">{children}</div>
      </body>
    </html>
  );
}
