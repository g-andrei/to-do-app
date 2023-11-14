import styled, { css } from "styled-components";

export const StyledModalContainer = styled.div(({ theme }) => {
  const { sizes, spacings, colors } = theme;
  return css`
    width: ${sizes.main.s500};
    height: ${sizes.main.s450};
    border-radius: ${spacings.main.s10};
    border: ${spacings.main.s2} solid ${colors.white};
    background: ${colors.surfaces.cardBackground};
  `;
});
