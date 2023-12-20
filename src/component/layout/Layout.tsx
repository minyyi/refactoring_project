import { ReactNode } from "react";

import styled from "@emotion/styled";
import Footer from "./footer/Footer";
import Appbar from "./appbar/Appbar";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <LayoutContainer>
        <Appbar />
        <Body>{props.children}</Body>
        <Footer />
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div`
  flex-grow: 1;
  background-color: white;
`;
