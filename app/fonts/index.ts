import localFont from "next/font/local";
import { Inter, IBM_Plex_Mono,Lexend } from "next/font/google";

export const geliatFont = localFont({
  src: [
    { path: './geliat-alt/Geliat-AltBlack.woff', weight: '900' },
    { path: './geliat-alt/Geliat-AltBlack.woff2', weight: '900' },
    {
      path: './geliat-alt/Geliat-AltBlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: './geliat-alt/Geliat-AltBlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    { path: './geliat-alt/Geliat-AltBold.woff', weight: '800' },
    { path: './geliat-alt/Geliat-AltBold.woff2', weight: '800' },
    {
      path: './geliat-alt/Geliat-AltBoldItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: './geliat-alt/Geliat-AltBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './geliat-alt/Geliat-AltItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './geliat-alt/Geliat-AltItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    { path: './geliat-alt/Geliat-AltMedium.woff', weight: '500' },
    {
      path: './geliat-alt/Geliat-AltMedium.woff2',
      weight: '500',
    },
    {
      path: './geliat-alt/Geliat-AltMediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './geliat-alt/Geliat-AltMediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './geliat-alt/Geliat-AltRegular.woff',
      weight: '400',
    },
    {
      path: './geliat-alt/Geliat-AltRegular.woff2',
      weight: '400',
    },
    {
      path: './geliat-alt/Geliat-AltSemiBold.woff',
      weight: '600',
    },
    {
      path: './geliat-alt/Geliat-AltSemiBold.woff2',
      weight: '600',
    },
    {
      path: './geliat-alt/Geliat-AltSemiBoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: './geliat-alt/Geliat-AltSemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})
export const visbyFont = localFont({
  src: [
    { path: './visby/VisbyCF-Heavy.woff', weight: '900' },
    { path: './visby/VisbyCF-Heavy.woff2', weight: '900' },
    { path: './visby/VisbyCF-Bold.woff', weight: '800' },
    { path: './visby/VisbyCF-Bold.woff2', weight: '800' },
    { path: './visby/VisbyCF-Medium.woff', weight: '500' },
    {
      path: './visby/VisbyCF-Medium.woff2',
      weight: '500',
    },
    {
      path: './visby/VisbyCF-Regular.woff',
      weight: '400',
    },
    {
      path: './visby/VisbyCF-Regular.woff2',
      weight: '400',
    },
    {
      path: './visby/VisbyCF-DemiBold.woff',
      weight: '600',
    },
    {
      path: './visby/VisbyCF-DemiBold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const bluuNextFont = localFont({
  src: [
    {
      path: './bluu-next/bluunext-bold-webfont.woff',
      weight: '700',
    },
    {
      path: './bluu-next/bluunext-bold-webfont.woff2',
      weight: '700',
    },
    {
      path: './bluu-next/bluunext-bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-heading',
})

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const lexend = Lexend({
  variable: "--font-sans",
  subsets: ["latin"],
});
