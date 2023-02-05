import Image from "next/image"
import styled from "styled-components"
import { H2, P } from "../elements/Typograhpy"
import { Container } from "../layouts/Container"
import { Section } from "../layouts/Section"
import { FeaturesContainer } from "./FeaturesContainer"
import { FeaturesContent } from "./FeaturesContent"
import { ImageContainer } from "./ImageContainer"

const FeaturesSection = styled(Section)`
`


const Image1 = styled.div`
    position: absolute;
    top: -20%;
    left: 10%;
    z-index: 1;
`


const Features1 = () => {
    return (
        <>
            <FeaturesSection color="#F1EEE8">
                <FeaturesContainer>
                    <FeaturesContent>
                        <H2>Lorem ipsum dolor sit amet.</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium sapiente dolorum esse tempore fugiat!</P>
                    </FeaturesContent>
                        <ImageContainer>
                            <Image src="sitting-reading.svg" fill={true} alt="feature image" />
                            {/* <Image1>
                                <Image src="/doodle.png" fill={true} alt="feature image" />
                            </Image1> */}
                        </ImageContainer>
                </FeaturesContainer>
            </FeaturesSection>
        </>
    )
}

export default Features1