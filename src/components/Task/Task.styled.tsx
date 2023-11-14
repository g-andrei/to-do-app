import styled, { css } from "styled-components";

export const StyledTask = styled.div(({ theme }) => {
  const { sizes, spacings } = theme;
  return css`
    /* width: ${sizes.main.s634}; */
    padding: ${spacings.main.s22} ${spacings.main.s20};
    display: flex;
    justify-content: space-between;
  `;
});
