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

const FeatureImageContaner = styled(ImageContainer)`
    background-image: url('graffitti.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`


const Features2 = () => {
    return (
        <>
            <FeaturesSection color="#FFF">
                <FeaturesContainer>
                    <FeatureImageContaner>
                        <Image src="rolling.svg" fill={true} alt="feature image" />
                    </FeatureImageContaner>
                    <FeaturesContent>
                        <H2>Lorem ipsum dolor sit amet.</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium sapiente dolorum esse tempore fugiat!</P>
                    </FeaturesContent>
                </FeaturesContainer>
            </FeaturesSection>
        </>
    )
}

export default Features2