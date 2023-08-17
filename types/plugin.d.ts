declare module "tailwindcss";

export interface Helpers {
  addUtilities(...args: any[]): any;
  addComponents(...args: any[]): any;
  addBase(...args: any[]): any;
  addVariant(name: string, callback: (...args: any[]) => void): any;
  e(...args: any[]): any;
  prefix(...args: any[]): any;
  theme(...args: any[]): any;
  variants(...args: any[]): any;
  config(...args: any[]): any;
  postcss: any;
}

export interface PluginOptions {
  grayColor?: string;
  accentColor?: string;
  overridePrefix?: string;
  destructiveColor?: string;
}

declare module "tailwindcss/plugin" {
  const withOptions: (
    plugin: (options: PluginOptions) => (helpers: Helpers) => void,
  ) => {
    handler: (helpers: Helpers) => void;
  };
}
