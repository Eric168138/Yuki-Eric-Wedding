import styled from 'styled-components';

export default function Poster() {
  return (
    <Container>
      <ImageWrapper>
        <RightTextBox>
          <Text>Yuki & Eric</Text>
        </RightTextBox>
        <Image src={process.env.PUBLIC_URL + '/image/Poster.jpg'} />
        <Absolute>
          <Text className="f6">Yuki & Eric</Text>
          <Text>香港九龍塘根德道7號 My Palace</Text>
          <Text className="f3">2026.11.1 Nov 12:00</Text>
        </Absolute>
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: bottom;
`;

const Absolute = styled.div`
  @media (max-width: 430px) {
    bottom: 2px;
  }
  @media (max-width: 414px) {
    bottom: 4px;
  }
  @media (max-width: 375px) {
    bottom: 8px;
  }
  @media (max-width: 360px) {
    bottom: 12px;
  }
  position: absolute;
  bottom: 22px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  @media (max-width: 430px) {
    font-size: 1.6rem;
  }
  @media (max-width: 412px) {
    font-size: 1.6rem;
  }
  @media (max-width: 393px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.6rem;
  }
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
  font-size: 1.6rem;
  color: #fff;

  &.f6 {
    @media (max-width: 430px) {
      font-size: 5rem;
      margin-bottom: 2px;
    }
    @media (max-width: 414px) {
      font-size: 5rem;
      margin-bottom: 2px;
    }
    @media (max-width: 412px) {
      font-size: 5.2rem;
    }
    @media (max-width: 393px) {
      font-size: 4.8rem;
      margin-bottom: 1px;
    }
    @media (max-width: 375px) {
      font-size: 5.2rem;
      margin-bottom: 2px;
    }
    @media (max-width: 360px) {
      font-size: 4.7rem;
    }
    font-family: 'yleeMortalHeart-ImmortalMemory';
    font-size: 6rem;
    margin-bottom: 10px;
  }
  &.f3 {
    @media (max-width: 430px) {
      font-size: 2.7rem;
    }
    @media (max-width: 412px) {
      font-size: 2.8rem;
    }
    @media (max-width: 393px) {
      font-size: 2.3rem;
    }
    @media (max-width: 375px) {
      font-size: 2.8rem;
    }
    @media (max-width: 360px) {
      font-size: 2.8rem;
    }
    font-family: 'yleeMortalHeart-ImmortalMemory';
    font-size: 3rem;
  }
`;

const RightTextBox = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: right;
  flex-direction: column;
  margin-left: -5%;
  margin-top: 5%;
`;
