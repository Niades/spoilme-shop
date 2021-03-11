import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as ChevronLeftIcon } from "../assets/images/chevron-left.svg";

interface BreadcrumbLinkProps {
  to: string,
  children: ReactNode,
};

const LinkContainer = styled.div`
  >a {
    display: grid;
    grid-template-columns: 20px 1fr;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    background-color: #ECEFFD;
    font-weight: 300;
    font-size: 14px;
    margin: 0 -10px;
    color: #000000 !important;
    text-decoration: none;
  }
`;

const BreadcrumbLink = (props: BreadcrumbLinkProps) => {
  const { to, children } = props;
  return (
    <LinkContainer>
      <Link to={to}>
        <ChevronLeftIcon />
        {children}
      </Link>    
    </LinkContainer>
  );
};

export {
  BreadcrumbLink,
};