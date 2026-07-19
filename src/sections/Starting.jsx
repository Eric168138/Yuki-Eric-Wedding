import styled from "styled-components";

export default function Starting({ height }) {
  return (
    <Container style={{ height }}>
      <ImgWrapper data-aos="flip-left" data-aos-delay="1000" data-aos-duration="1800">
        <Image src={process.env.PUBLIC_URL + "/image/main-card.jpeg"} />
      </ImgWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const ImgWrapper = styled.div`
  height: 100%;
  background-color: #f0ede6;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
