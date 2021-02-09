import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  children: React.ReactNode,
};

interface ShowcaseProps {
  children: React.ReactNode,
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.color.header};
  z-index: 999;
`;

const Logo = styled.div`
  font-family: 'sans';
  font-size: 24px;
  padding: 15px 0;
  text-align: center;
`;

const FooterContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
`;

const FooterLink = styled.div`
  cursor: pointer;
  padding: 10px 0;
`;

const ContentContainer = styled.div`
  padding-top: 58px;
`;

// Layout container
const Container = (props: ContainerProps) => {
  return (<div>{props.children}</div>);
};

// Header
const Header = () => {
  return (
    <Nav>
      <Logo>wishlist.shop</Logo>
    </Nav>
  );
};

// Footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink>
        terms of service
      </FooterLink>
      <FooterLink>
        privacy policy
      </FooterLink>
      <FooterLink>
        contact us
      </FooterLink>
    </FooterContainer>
  );
};

// Showcase
const ShowcaseLayout = (props: ShowcaseProps) => {
  return (
    <Container>
      <Header/>
      <ContentContainer>
        {props.children}
      </ContentContainer>
      <Footer />
    </Container>
  )
};

export {
  ShowcaseLayout,
};