import styled, { css } from "styled-components";

export const StyledInputText = styled.input(({ theme }) => {
  const { sizes, spacings, fontSize, fontWeight, lineHeight } = theme;
  return css`
    color: #858585;
    font-size: ${fontSize.text.xl};
    font-weight: ${fontWeight.regular};
    line-height: ${lineHeight.text.lg};
    font-style: normal;
    border: none;
    border-radius: ${spacings.main.s10};
    width: ${sizes.main.s420};
    height: ${sizes.main.s40};
    padding: 0 10px;

    &&:focus {
      color: #354259;
      outline: none;
    }
  `;
});

export const StyledInputContainer = styled.div(() => {
  return css`
    display: flex;
    align-items: center;
  `;
});

export const StyledErrorContaienr = styled.span(({ theme }) => {
  const { spacings } = theme;
  return css`
    position: relative;
    top: ${spacings.main.s2};
    right: ${spacings.main.s30};
  `;
});
