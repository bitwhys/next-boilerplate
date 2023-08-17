// ---------- Tokens -------
// Colors
import {
  RADIX_COLORS_BASE,
  RADIX_COLORS_METALS,
  RADIX_SCALE,
} from "./plugin.constants";

export const addColorVariables = () => {
  //   TODO: add base neutral-color palette
  //   TODO: add base primary-color palette
  //   TODO: add base destructive-color palette
  //   TODO?: add base secondary-color palette
};
// Radius
// Shadows
// Space
// Typography
export const createThemeColorUtilities = () => {
  const _base_colors = RADIX_COLORS_BASE.reduce((config, color) => {
    const scales = RADIX_SCALE.reduce((scale, step) => {
      scale[step] = `var(--${color}-${step})`;
      scale[`a${step}`] = `var(--${color}-a${step})`;
      return scale;
    }, {});
    config[color] = scales;
    return config;
  }, {} as Record<string | number, string>);

  const _metal_colors = RADIX_COLORS_METALS.reduce((config, color) => {
    const scales = RADIX_SCALE.reduce((scale, step) => {
      scale[step] = `var(--${color}-${step})`;
      scale[`a${step}`] = `var(--${color}-a${step})`;
      return scale;
    }, {});
    config[color] = scales;
    return config;
  }, {} as Record<string | number, string>);

  const _neutral_color = RADIX_SCALE.reduce((scale, step) => {
    scale[step] = `var(--gray-${step})`;
    scale[`a${step}`] = `var(--gray-a${step})`;
    return scale;
  }, {});
  const _primary_color = RADIX_SCALE.reduce((scale, step) => {
    scale[step] = `var(--accent-${step})`;
    scale[`a${step}`] = `var(--accent-a${step})`;
    return scale;
  }, {});

  const scales = {
    background: "var(--background)",
    neutral: _neutral_color,
    primary: _primary_color,
    ..._base_colors,
    ..._metal_colors,
  };
  console.log(scales)
  return scales

};
