import Image from "next/image"
import styled from "styled-components"
import { Button } from "../elements/Buttons"
import { H2, P } from "../elements/Typograhpy"
import { Container } from "../layouts/Container"
import { Section } from "../layouts/Section"
import { FeaturesContainer } from "./FeaturesContainer"
import { FeaturesContent } from "./FeaturesContent"
import { ImageContainer } from "./ImageContainer"

const FeaturesSection = styled(Section)`

`



const Features3 = () => {
    return (
        <>
            <FeaturesSection color="#F1EEE8">
                <FeaturesContainer>
                    <FeaturesContent>
                        <H2>Lorem ipsum dolor sit amet.</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium sapiente dolorum esse tempore fugiat!</P>

                        <div>
                            <Button>Click Here</Button>
                        </div>
                    </FeaturesContent>
                    <ImageContainer>
                        <Image src="loving.svg" fill={true}  alt="feature image" />
                    </ImageContainer>
                </FeaturesContainer>
            </FeaturesSection>
        </>
    )
}

export default Features3