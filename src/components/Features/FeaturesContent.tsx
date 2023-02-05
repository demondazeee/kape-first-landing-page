import styled from "styled-components";

type FeaturesContent = {
    textAlign?: string
}

export const FeaturesContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: left;

    @media (max-width: 640px) {
        text-align: center;
    }
`