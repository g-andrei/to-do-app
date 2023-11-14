import colors from "./colors";

export const fontSize = {
  text: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    xxl: "32px",
  },
};

export const fontWeight = {
  regular: "400",
  medium: "600",
  bold: "700",
  extraBold: "800",
};

export const fontFamily = {
  text: "Open Sans",
};

export const lineHeight = {
  text: {
    xs: "16px",
    sm: "18px",
    md: "28px ",
    lg: "40px",
  },
};

const typography = {
  title: {
    fontSize: { desktop: fontSize.text.xxl, mobile: fontSize.text.xxl },
    fontWeight: { desktop: fontWeight.extraBold, mobile: fontWeight.extraBold },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    lineHeight: { desktop: lineHeight.text.md, mobile: lineHeight.text.md },
    color: { desktop: colors.text.title, mobile: colors.text.title },
  },
  paragraph: {
    fontSize: { desktop: fontSize.text.xl, mobile: fontSize.text.lg },
    fontWeight: { desktop: fontWeight.bold, mobile: fontWeight.regular },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    lineHeight: { desktop: lineHeight.text.sm, mobile: lineHeight.text.xs },
    color: { desktop: colors.text.primary, mobile: colors.text.primary },
  },
  button: {
    fontSize: { desktop: fontSize.text.xl, mobile: fontSize.text.lg },
    fontWeight: { desktop: fontWeight.extraBold, mobile: fontWeight.extraBold },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    lineHeight: { desktop: lineHeight.text.sm, mobile: lineHeight.text.sm },
    color: { desktop: colors.text.secondary, mobile: colors.text.secondary },
  },
};

export default typography;
