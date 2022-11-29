import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../Components/FooterStyles";
import '../Styles/Footer.css'


const MyFooter = () => {
    return (
        <div className='myFooter'>
            <Box>
                {/* <h1 style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "-50px"
                }}>
                    GeeksforGeeks: A Computer Science Portal for Geeks
                </h1> */}
                <Container>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Aim</FooterLink>
                            <FooterLink href="#">Vision</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">Food Packages</FooterLink>
                            <FooterLink href="#">Family Rooms</FooterLink>
                            <FooterLink href="#">Video Games</FooterLink>
                            <FooterLink href="#">Smart Billing</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Branches</Heading>
                            <FooterLink href="#">Lahore</FooterLink>
                            <FooterLink href="#">Islamabad</FooterLink>
                            <FooterLink href="#">Sialkot</FooterLink>
                            <FooterLink href="#">Karachi</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </div>
    )
}

export default MyFooter
