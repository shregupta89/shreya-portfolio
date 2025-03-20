import type { Metadata } from "next";
import { Geist, Geist_Mono,Epilogue } from "next/font/google";
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
      // `${geistSans.variable} ${geistMono.variable} antialiased 
        className={epilogue.className}
      >
        {children}
      </body>
    </html>
  );
}
