import styled from "styled-components"
import { LinkButton } from "../elements/Buttons"
import { LI, UL } from "../elements/Lists"
import { H2 } from "../elements/Typograhpy"
import { Container } from "../layouts/Container"

const Header = styled.header`
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    box-shadow: 0 2px 2px rgba(0,0,0,0.25);
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavList = styled(UL)`
    display: flex;
    gap: 2rem;
`

const Navbar = () => {
    return (
        <>
            <Header>
                <Container>
                    <Nav>
                        <H2>kape</H2>
                        <NavList>
                            <LI>
                                <LinkButton>Home</LinkButton>
                            </LI>
                            <LI>
                                <LinkButton>About</LinkButton>
                            </LI>
                            <LI>
                                <LinkButton>Contact</LinkButton>
                            </LI>
                        </NavList>
                    </Nav>
                </Container>
            </Header>
        </>
    )
}

export default Navbar