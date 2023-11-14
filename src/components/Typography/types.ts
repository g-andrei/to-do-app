import { ReactNode } from "react";

export enum Tags {
  title = "h1",
  paragraph = "p",
  button = "button",
}

export enum BreakPoints {
  Desktop = "desktop",
  Mobile = "mobile",
}

export type TypograpyProps = {
  variant: keyof typeof Tags;
  children: ReactNode;
  style?: React.CSSProperties;
};

export interface StyledTypographyProps {
  variant: keyof typeof Tags;
}
