import styled, { css } from "styled-components";
import colors from "src/themes/colors";

export interface StyledButtonProps  {
  variant?: string;
  selected?: boolean;
  disabled?: boolean;
}

const primary = () => {
  return css`
    background-color: ${colors.surfaces.button};
    color: ${colors.text.primary};
  `;
};

const secondary = () => {
  return css`
    background-color: transparent;
    color: ${colors.text.secondary};
  `;
};

const selectedStyle = () => {
  return css`
    color: ${colors.text.primary};
  `;
};

const disabledStyle = `
  opacity: 0.5;
    :hover {
      cursor: not-allowed;
      box-shadow: none;
    }
`;

export const StyledButton = styled.button<StyledButtonProps>(
  ({ theme, variant, selected, disabled }) => {
    const { spacings, fontFamily, fontSize, fontWeight, lineHeight } = theme;
    const getColor = () => (variant === "secondary" ? secondary : primary);
    return css`
      border-radius: ${spacings.main.s10};
      padding: ${spacings.main.s6} ${spacings.main.s16};
      font-family: ${fontFamily.text};
      font-size: ${fontSize.text.xl};
      font-weight: ${fontWeight.extraBold};
      line-height: ${lineHeight.text.sm};
      border: none;

      ${getColor()}
      ${selected && selectedStyle}
      ${disabled && disabledStyle}
    `;
  }
);
