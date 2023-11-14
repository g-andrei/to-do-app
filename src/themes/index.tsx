/* eslint-disable react-refresh/only-export-components */
import { ThemeProvider } from "styled-components";
import breakpoints from "./breackpoints";
import colors from "./colors";
import sizes from "./sizes";
import spacings from "./spacings";

import { Themes } from "./theme";
import typography, {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "./typography";

interface ThemeProps {
  children: React.ReactNode;
}

export const theme: Themes = {
  colors,
  spacings,
  sizes,
  typography,
  breakpoints,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
};

const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
