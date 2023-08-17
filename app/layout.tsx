import "@radix-ui/themes/styles.css"
import "./globals.css";
import "./radix-themes.overrives.css"
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import {sfPro, inter, visbyFont, lexend, geliatFont} from "./fonts";
// import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
// import { Suspense } from "react";
import {ThemeProvider} from "@/components/layout/theme-provider";
import {Suspense} from "react";
import Nav from "@/components/layout/nav";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, geliatFont.variable,'font-sans')}>
      <ThemeProvider>
        <div className="fixed h-screen w-full bg-gradient-to-br from-violet-3 via-white to-primary-8"/>
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav/>
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer/></ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
