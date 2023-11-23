import styled, { css } from "styled-components";

export const StyledAddEventModal = styled.div(() => {
  return css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  `;
});
