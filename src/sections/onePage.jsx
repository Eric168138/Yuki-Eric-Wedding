import styled from "styled-components";

export default function OnePage({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
