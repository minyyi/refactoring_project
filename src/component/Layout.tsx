import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Footer } from "./Footer";
import Appbar from "./Appbar";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Container>
        <Appbar />
        <Body>
          <BodyDiv>{props.children}</BodyDiv>
        </Body>
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div`
  flex-grow: 1;
  background-color: white;
  margin: 20px;
`;

const BodyDiv = styled.div`
  margin: 0 auto;
`;
const Div = styled.div`
  border: 2px solid gray;
`;
