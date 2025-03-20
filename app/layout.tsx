import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue=Epilogue({
  subsets:['latin'],
})




export const metadata: Metadata = {
  title: "Shreya Gupta",
  description: "Shreya Gupta Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
     
        className={epilogue.className}
      >
        {children}
      </body>
    </html>
  );
}
