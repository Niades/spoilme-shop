import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as ChevronLeftIcon } from "../assets/images/chevron-left.svg";

interface BreadcrumbLinkProps {
  to: string,
  children: ReactNode,
};

const BreadcrumbContainer = styled.div`
  position: absolute;
  top: 78px;
  left: 0;
  width: 100vw;
  background-color: #ECEFFD;

  a {
    display: grid;
    grid-template-columns: 20px 1fr;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    font-weight: 300;
    font-size: 14px;
    color: #000000 !important;
    text-decoration: none;
  }
`;

const BreadcrumbInner = styled.div`
  @media (min-width: 650px) {
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
  }
`;

const BreadcrumbLink = (props: BreadcrumbLinkProps) => {
  const { to, children } = props;
  return (
    <BreadcrumbContainer>
      <BreadcrumbInner>
        <Link to={to}>
          <ChevronLeftIcon />
          {children}
        </Link>    
      </BreadcrumbInner>
    </BreadcrumbContainer>
  );
};

export {
  BreadcrumbLink,
};