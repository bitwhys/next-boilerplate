"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {Theme as RadixThemeProvider} from "@radix-ui/themes";
import { ThemeProviderProps } from "next-themes/dist/types"

interface ProviderProps extends ThemeProviderProps {
  grayColor?: string
  accentColor?: string
  destructiveColor?: string
  panelBackground?: 'solid' | 'translucent'
  radius?: string
}
export function ThemeProvider({ panelBackground = 'translucent',radius = "large",grayColor = "mauve",accentColor = "crimson",destructiveColor,children, ...props }: ProviderProps) {
  return <NextThemesProvider {...props}>
    <RadixThemeProvider panelBackground={panelBackground} grayColor={grayColor} accentColor={accentColor} radius={radius}>
      {children}
    </RadixThemeProvider>
  </NextThemesProvider>
}
