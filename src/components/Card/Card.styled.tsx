import styled, { css } from "styled-components";

export const StyledCard = styled.section(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s12};
    border-radius: ${spacings.main.s10};
    background-color: ${colors.surfaces.cardBackground};
    width: fit-content;
    position: relative;
    top: -4px;
  `;
});

export const StyledCardShadow = styled.div(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    border-radius: ${spacings.main.s10};
    background-color: ${colors.surfaces.shadow};
    position: relative;
    width: fit-content;
  `;
});
