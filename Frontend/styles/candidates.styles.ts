import styled from "styled-components";

export const CandidateStyles = styled("div")`
  .body {
    min-height: 100vh;
    height: 100%;
    padding: 2rem 4rem;

    p {
        margin-bottom: 1rem;
    }

    .flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem;
    }
    @media screen and (max-width: 1080px) {
      .flex {
          grid-template-columns: 1fr;
      }
    }
  }

`;
