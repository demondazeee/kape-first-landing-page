import styled from "styled-components"
import { Button } from "../elements/Buttons"
import { H2, H3, P } from "../elements/Typograhpy"
import { Card } from "../layouts/Card"
import { Container } from "../layouts/Container"
// import { Section } from "../layouts/Section"

const Section = styled.section`
    padding: 10rem 0;
`

const SubscriptionContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    text-align: center;
`

const ItemContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 640px) {
        flex-wrap: wrap;
    }
`

const Items = styled(Card)`
    flex: 1;
    padding: 2rem;
`

const ItemsContentContainer = styled.div`
    text-align: center;
    & > *:not(:last-child) {
        margin-bottom: 55px;
    }
`

const ItemsDescription = styled.div`

`

const Subscriptions = () => { 
    return (
        <>
            <Section>
                <SubscriptionContainer>
                    <H2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quod!</H2>
                    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum a non illum atque distinctio, architecto sed neque iste nesciunt. Assumenda?</P>
                    <ItemContainer>
                        <Items>
                            <ItemsContentContainer>
                                <ItemsDescription>
                                    <H3>Item 1</H3>
                                    <P>Daily Ice coffee</P>
                                    <P>$299 / month</P>
                                </ItemsDescription>
                                <Button>Subscribe</Button>
                            </ItemsContentContainer>
                        </Items>
                        <Items>
                            <ItemsContentContainer>
                                <ItemsDescription>
                                    <H3>Item 2</H3>
                                    <P>Daily Ice coffee</P>
                                    <P>$299 / month</P>
                                </ItemsDescription>
                                <Button>Subscribe</Button>
                            </ItemsContentContainer>
                        </Items>
                        <Items>
                            <ItemsContentContainer>
                                <ItemsDescription>
                                    <H3>Item 3</H3>
                                    <P>Daily Ice coffee</P>
                                    <P>$299 / month</P>
                                </ItemsDescription>
                                <Button>Subscribe</Button>
                            </ItemsContentContainer>
                        </Items>
                    </ItemContainer>

                    <div>
                        <Button>See all subscriptions</Button>
                    </div>
                </SubscriptionContainer>
            </Section>
        </>
    )
}

export default Subscriptions