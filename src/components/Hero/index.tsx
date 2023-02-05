import styled from "styled-components"
import { Container } from "../layouts/Container"
import Image from 'next/image'
import { H2, P } from "../elements/Typograhpy"
import { Button } from "../elements/Buttons"
import { Section } from "../layouts/Section"

const HeroSection = styled(Section)`
    background-image: url('Vorderrhein.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroContentsContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    text-align: center;
`

const Hero = () => {
    return (
        <>
            <HeroSection>
                <HeroContentsContainer>
                    <Image src="coffee.svg" width={350} height={350} alt="hero image" />
                    <H2>kape first!</H2>
                    <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor culpa nisi aut, sed voluptatem tempora pariatur velit accusantium corporis non.</P>
                    <Button>Sign up here hehe</Button>
                </HeroContentsContainer>
            </HeroSection>
        </>
    )
}

export default Hero