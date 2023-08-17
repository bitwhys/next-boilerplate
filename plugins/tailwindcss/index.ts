import plugin from "tailwindcss/plugin";
import { DEFAULT_OPTIONS, RADIX_COLORS_BASE } from "./plugin.constants";
import { createThemeColorUtilities } from "./plugin-radix-themes";

const extendUserConfig = (options) => ({
  theme: {
    extend: {
      colors: createThemeColorUtilities(),
    },
  },
});

type ValidCSSCustomVariableName = `--${string}`;
const getRadixVariableObject = (
  prefix: ValidCSSCustomVariableName,
  fromPalette: string,
) => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce(
    (scaleObject, scale) => {
      scaleObject[`${prefix}-${scale}`] = `var(--${fromPalette}-${scale})`;
      scaleObject[
        `${prefix}-alpha-a${scale}`
      ] = `var(--${fromPalette}-a${scale})`;
      return scaleObject;
    },
    {} as Record<ValidCSSCustomVariableName, string>,
  );
};
export interface PluginOptions {
  grayColor?: string;
  accentColor?: string;
  destructiveColor?: string;
  overridePrefix?: string;
}
function createPluginWithOptions(options: PluginOptions = {}) {
  return function withRadixThemesPlugin({ addBase,addUtilities,theme }) {
    addBase({
      ":root": {
        ...getRadixVariableObject(
          "--neutral-color",
          options.grayColor ?? DEFAULT_OPTIONS.grayColor,
        ),
        ...getRadixVariableObject(
          "--accent-color",
          options.accentColor ?? DEFAULT_OPTIONS.accentColor,
        ),
        ...getRadixVariableObject(
          "--destructive-color",
          options.destructiveColor ?? DEFAULT_OPTIONS.destructiveColor,
        ),
        "--background": "var(--color-page-background)",
      },
    });
    addUtilities({
      '.rdx-rounded-full': {
        '--radius-full': theme('borderRadius.full')
      }
    })
  };

}

export default plugin.withOptions(createPluginWithOptions, extendUserConfig);
