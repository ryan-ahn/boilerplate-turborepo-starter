import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const colors = {
  default: {
    50: "#FAFAFA",
    100: "#F2F2F2",
    200: "#E7E7E7",
    300: "#D9D9D9",
    400: "#C8C8C8",
    500: "#999999",
    600: "#666666",
    700: "#444444",
    800: "#282828",
    900: "#191919",
  },
  primary: {
    50: "#fbe7e7",
    100: "#ffc8c8",
    200: "#FFA992",
    300: "#ff6262",
    400: "#ff3a3a",
    500: "#ff2626",
    600: "#f42222",
    700: "#e61d1d",
    800: "#d81919",
    900: "#bf1010",
  },
  white: "#ffffff",
  black: "#000000",
};

const unit = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
  15: "60px",
  16: "64px",
  17: "68px",
  18: "72px",
  19: "76px",
  20: "80px",
  24: "96px",
  28: "112px",
  30: "120px",
  32: "128px",
  33: "132px",
  34: "136px",
  35: "140px",
  36: "144px",
  37: "148px",
  40: "160px",
  44: "176px",
  48: "192px",
  50: "200px",
  52: "208px",
  56: "224px",
  60: "240px",
  62: "248px",
  64: "256px",
  72: "288px",
  80: "320px",
  90: "360px",
  96: "384px",
  100: "400px",
};

const fontFamily = {
  sans: [
    "Noto Sans KR",
    "Pretendard",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
};

const fontSize = {
  1: "8px",
  2: "10px",
  3: "12px",
  4: "14px",
  5: "16px",
  6: "18px",
  7: "20px",
  8: "22px",
  9: "24px",
  10: "26px",
  11: "28px",
  12: "30px",
  13: "32px",
  14: "34px",
  15: "36px",
  16: "38px",
  17: "40px",
  18: "42px",
  19: "44px",
  20: "46px",
  21: "48px",
  22: "50px",
  23: "52px",
  24: "54px",
  25: "56px",
  26: "58px",
  27: "60px",
  28: "62px",
  29: "64px",
  30: "66px",
  31: "68px",
  32: "70px",
  33: "72px",
};

const fontWeight = {
  light: 300,
  medium: 500,
  semibold: 600,
  bold: 750,
};

const lineHeight = {
  1: "12px",
  2: "14px",
  3: "16px",
  4: "18px",
  5: "20px",
  6: "22px",
  7: "24px",
  8: "26px",
  9: "28px",
  10: "30px",
  11: "32px",
  12: "34px",
  13: "36px",
  14: "38px",
  15: "40px",
  16: "42px",
  17: "44px",
  18: "46px",
  19: "48px",
  20: "50px",
  21: "52px",
  22: "54px",
  23: "56px",
  24: "58px",
  25: "60px",
  26: "62px",
  27: "64px",
  28: "66px",
  29: "68px",
  30: "70px",
  31: "72px",
  32: "74px",
  33: "76px",
  34: "78px",
  35: "80px",
  36: "82px",
  37: "84px",
  38: "86px",
  39: "88px",
  40: "90px",
};

const letterSpacing = {
  1: "-0.01px",
  2: "-0.02px",
  3: "-0.03px",
  4: "-0.04px",
  5: "-0.05px",
  6: "-0.06px",
  7: "-0.07px",
  8: "-0.08px",
  9: "-0.09px",
  10: "-0.1px",
  11: "-0.11px",
  12: "-0.12px",
  13: "-0.13px",
  14: "-0.14px",
  15: "-0.15px",
  16: "-0.16px",
  17: "-0.17px",
  18: "-0.18px",
  19: "-0.19px",
  20: "-0.2px",
};

const borderWidth = {
  sm: "1px",
  md: "4px",
  lg: "6px",
};

const borderRadius = {
  none: "0px",
  tn: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  full: "9999px",
};

const config: Omit<Config, "content"> = {
  content: ["../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        ...unit,
      },
      margin: {
        ...unit,
      },
      gap: {
        ...unit,
      },
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      borderWidth,
      borderRadius,
      colors: {
        default: {
          DEFAULT: colors.default[800],
          50: colors.default[50],
          100: colors.default[100],
          200: colors.default[200],
          300: colors.default[300],
          400: colors.default[400],
          500: colors.default[500],
          600: colors.default[600],
          700: colors.default[700],
          800: colors.default[800],
          900: colors.default[900],
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: colors.white,
            foreground: colors.default[900],
            default: {
              DEFAULT: colors.default[500],
              foreground: colors.default[50],
              50: colors.default[50],
              100: colors.default[100],
              200: colors.default[200],
              300: colors.default[300],
              400: colors.default[400],
              500: colors.default[500],
              600: colors.default[600],
              700: colors.default[700],
              800: colors.default[800],
              900: colors.default[900],
            },
            primary: {
              DEFAULT: colors.primary[500],
              50: colors.primary[50],
              100: colors.primary[100],
              200: colors.primary[200],
              300: colors.primary[300],
              400: colors.primary[400],
              500: colors.primary[500],
              600: colors.primary[600],
              700: colors.primary[700],
              800: colors.primary[800],
              900: colors.primary[900],
            },
            danger: {
              DEFAULT: colors.primary[600],
            },
          },
        },
        dark: {
          colors: {
            background: colors.black,
            foreground: colors.default[50],
            default: {
              DEFAULT: colors.default[500],
              50: colors.default[900],
              100: colors.default[800],
              200: colors.default[700],
              300: colors.default[600],
              400: colors.default[500],
              500: colors.default[400],
              600: colors.default[300],
              700: colors.default[200],
              800: colors.default[100],
              900: colors.default[50],
            },
            primary: {
              DEFAULT: colors.primary[500],
              50: colors.primary[900],
              100: colors.primary[800],
              200: colors.primary[700],
              300: colors.primary[600],
              400: colors.primary[500],
              500: colors.primary[400],
              600: colors.primary[300],
              700: colors.primary[200],
              800: colors.primary[100],
              900: colors.primary[50],
            },
            danger: {
              DEFAULT: colors.primary[400],
            },
          },
        },
      },
    }),
  ],
};
export default config;
