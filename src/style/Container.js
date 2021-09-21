import styled, { css } from "styled-components";

const GridContainer = css`
  margin: 3rem 1rem;
  display: grid;
  grid-template-columns:
    [full-start] 1fr [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] 1fr [full-end];
  grid-gap: 1rem;
`;

const Container = styled.div`
  ${GridContainer}

  main {
    grid-column: center-start / center-end;

    .heading {
      h1 {
        text-transform: none;
        max-width: 500px;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Container;
