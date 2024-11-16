export interface TokenValue {
  [key: string]: string;
}
export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    textPrimary: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export enum TokenPresenter {
  ANIMATION = "Animation",
  BORDER = "Border",
  BORDER_RADIUS = "BorderRadius",
  COLOR = "Color",
  EASING = "Easing",
  FONT_FAMILY = "FontFamily",
  FONT_SIZE = "FontSize",
  FONT_WEIGHT = "FontWeight",
  GRADIENT = "Gradient",
  LINE_HEIGHT = "LineHeight",
  LETTER_SPACING = "LetterSpacing",
  OPACITY = "Opacity",
  SHADOW = "Shadow",
  SPACING = "Spacing",
  SVG = "Svg",
  IMAGE = "Image",
}

export enum TokenSourceType {
  CSS = "CSS",
  LESS = "Less",
  SCSS = "SCSS",
  SVG = "SVG",
  THEO = "THEO",
  IMAGE = "IMAGE",
}

export interface PresenterProps {
  token: string;
  category: string;
}
