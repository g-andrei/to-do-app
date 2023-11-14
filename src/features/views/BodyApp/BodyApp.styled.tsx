import styled, { css } from "styled-components";

export const StyledBodyAppContaienr = styled.div(({ theme }) => {
  const { colors, sizes } = theme;
  return css`
    height: ${sizes.main.s450};
    width: ${sizes.main.s650};
    overflow: overlay;
    scrollbar-gutter: stable;

    &&::-webkit-scrollbar {
      width: 14px;
    }

    &&::-webkit-scrollbar-track {
      background: ${colors.scrollBar.track};
      border-radius: 10px;
    }

    &&::-webkit-scrollbar-thumb {
      background: ${colors.scrollBar.thumb};
      border-radius: 10px;
      border: 2px solid ${colors.scrollBar.track};
    }

    &&::-webkit-scrollbar-thumb:hover {
      background: ${colors.scrollBar.hover};
    }
  `;
});
