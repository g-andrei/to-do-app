import styled, { css } from "styled-components";

export const StyledTask = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    padding: ${spacings.main.s22} ${spacings.main.s8};
    display: flex;
    justify-content: space-between;
  `;
});
