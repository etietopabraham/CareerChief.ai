import styled from "styled-components";

export const StyledCard = styled("div")`
    border: 1px solid #B6ECF8;
    width: 100%;
    height: auto;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 14px;
    margin-bottom: 2rem;

    .logo {
        height: 63px ;
        width: 63px;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .sub {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    .desc {
        width: 668px;
    }
`