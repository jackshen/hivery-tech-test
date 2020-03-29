import { darken as originalDarken } from "polished";

export const aliceBlue = "#e6f7ff";
export const darkGray = "#9f9f9f";
export const dodgerBlue = "#1890ff";
export const gainsboro = "#d8d8d8";
export const greyChateau = "#989a9e";
export const lima = "#82cc1f";
export const nightRider = "#333333";
export const nobel = "#999999";
export const outrageousOrange = "#f65d3e";
export const raven = "#6e7074";
export const selectiveYellow = "#ffb107";
export const smalt = "#003a8c";
export const solitude = "#e4e6ea";
export const veryLightGrey = "#cccccc";
export const whiteSmoke = "#eeeeee";
export const zircon = "#dadce0";

// state-based colour names
export const caution = outrageousOrange;
export const other = selectiveYellow;
export const recommended = lima;

// thematic helpers
export const darken = colour => originalDarken(0.05, colour);
