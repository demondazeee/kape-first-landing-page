import styled from "styled-components";
import { Container } from "../layouts/Container";

export const FeaturesContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    text-align: center;

    @media (max-width: 640px) {
        flex-direction: column-reverse;
    }
`