import type * as CSS from "csstype";
declare type Color = CSS.DataType.Color;
export declare type ColorScheme = {
    primary: Color;
    secondary: Color;
    ternary: Color;
    quartenary: Color;
    hoverHighlight: Color;
    markerCurrentTime: Color;
    text: Color;
    background: Color;
    toast?: Color;
};
export declare const colorSchemes: Record<string, ColorScheme>;
export declare type ColorSchemeKey = keyof typeof colorSchemes;
export default colorSchemes;
