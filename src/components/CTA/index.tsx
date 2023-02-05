import styled from "styled-components"
import { Button } from "../elements/Buttons"
import { H2, P } from "../elements/Typograhpy"
import { Container } from "../layouts/Container"
import { Section } from "../layouts/Section"

const CTASection = styled(Section)`
    height: 50vh;
`

const CTAContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    text-align: center;
`

export const CTA = () => {
    return (
        <>
            <CTASection color="#F1EEE8">
                <CTAContainer>
                    <H2>Hello</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa perspiciatis fugiat voluptates reiciendis minus hic doloremque, libero, in tempore dignissimos doloribus voluptate temporibus explicabo.</P>
                    <div>
                        <Button>Click Here to sign up</Button>
                    </div>
                </CTAContainer>
            </CTASection>
        </>
    )
}

export default CTA