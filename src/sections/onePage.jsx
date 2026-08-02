import styled from 'styled-components';

export default function OnePage({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 816px) {
    background-image: url('${process.env.PUBLIC_URL}/image/background.jpg');
    background-repeat: repeat-y;
    background-size: 100% auto;
    background-position: center top;
  }
`;
