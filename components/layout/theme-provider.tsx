"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {Theme as RadixThemeProvider} from "@radix-ui/themes";
import { ThemeProviderProps } from "next-themes/dist/types"

interface ProviderProps extends ThemeProviderProps {
  grayColor?: string
  accentColor?: string
  destructiveColor?: string
  radius?: string
}
export function ThemeProvider({ radius = "large",grayColor = "mauve",accentColor = "crimson",destructiveColor,children, ...props }: ProviderProps) {
  return <NextThemesProvider {...props}>
    <RadixThemeProvider grayColor={grayColor} accentColor={accentColor} radius={radius}>
      {children}
    </RadixThemeProvider>
  </NextThemesProvider>
}
