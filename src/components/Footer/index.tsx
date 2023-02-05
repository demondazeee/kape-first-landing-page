import styled from "styled-components";
import { LI, UL } from "../elements/Lists";
import { H3 } from "../elements/Typograhpy";
import { Container } from "../layouts/Container";
import { Section } from "../layouts/Section";

const FooterContainer = styled.footer``

const FooterSection = styled(Section)`
    height: 50vh;

    background-image: url('Waimakariri.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const FooterContentsContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.5rem;
`

const FooterItem = styled.div`
    flex: 1;
`

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSection>
                    <FooterContentsContainer>
                        <FooterItem>
                            <H3>kape first</H3>
                        </FooterItem>
                        <FooterItem>
                            <UL>
                                <LI>Home</LI>
                                <LI>About</LI>
                                <LI>Contact Us</LI>
                            </UL>
                        </FooterItem>
                        <FooterItem>
                            <UL>
                                <LI>Blogs</LI>
                                <LI>Location</LI>
                                <LI>Careers</LI>
                            </UL>
                        </FooterItem>
                    </FooterContentsContainer>
                </FooterSection>
            </FooterContainer>
        </>
    )
}

export default Footer