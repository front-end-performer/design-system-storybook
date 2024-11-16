export interface TokenValue {
  name: string;
  value: string;
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

export type ColorProps = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    textPrimary: string;
  };
};

export type SpacingProps = {
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export interface PresenterProps {
  token: string;
  category: string;
}
