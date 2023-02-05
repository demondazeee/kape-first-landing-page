import styled from "styled-components";

export const Button = styled.button`
    outline: none;
    border: none;
    color: #fff;
    background-color: #6DBFD1;
    padding: 1rem 2rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid #000;
    box-shadow: 5px 5px #000;
    transition: box-shadow .2s ease-out, transform .2s ease-out;
    cursor: pointer;

    &:active {
        transform: translate(2.5px, 2.5px);
        box-shadow: 2.5px 2.5px #000;
    }
`

export const LinkButton = styled.a``