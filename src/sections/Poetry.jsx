import Button from "../components/Button/Button";
import styled from "styled-components";
import { Flower } from "../styles";
import { useSetRecoilState } from "recoil";
import modalState from "../store/infoModal";

export default function Poetry() {  
  const setModalState = useSetRecoilState(modalState);
  return (
    <Container>
      <FormWrapper data-aos="flip-left" data-aos-delay="300" data-aos-duration="1200">
        <BackgoundImage src={process.env.PUBLIC_URL + "/image/form-background.png"} />
        <Flower className="f-t" src={process.env.PUBLIC_URL + "/image/flower.png"} />
        <TextWrapper className="align-l">
          <Text>六月初夏,</Text>
          <Text>诚邀一直陪伴在身边的感恩之人们。</Text>
          <Text>爱着彼此本来的样子</Text>
          <Text>感恩彼此的存在</Text>
          <Text>结下缘分的我们两人</Text>
          <Text>和在一起就心情变好的你一起</Text>
          <Text>将一起走人生的路。</Text>
        </TextWrapper>
        <Flower className="f-b" src={process.env.PUBLIC_URL + "/image/flower.png"} />
      </FormWrapper>
      <FormWrapper className="w1">
        <TextRowWrapper data-aos="fade-up" data-aos-delay="300">
          <TextWrapper className="alignt-l">
            <Text className="t1">梁滿盈·黃月好的長子</Text> <Text className="t1">黎柱明·鍾春莹的長女</Text>
          </TextWrapper>
          <TextWrapper className="align-r">
            <Text className="t2">梁裕豪</Text> <Text className="t2">黎玉琪</Text>
          </TextWrapper>
        </TextRowWrapper>
        {/* <Button onClick={() => setModalState(true)} data-aos="fade-up" data-aos-delay="200">
          联系
        </Button> */}
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  &.w1 {
    margin: 20px;
    background-color: #ffff;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextRowWrapper = styled.div`
  @media (max-width: 393px) {
    width: 18rem;
  }
  @media (max-width: 360px) {
    width: 85%;
  }
  @media (max-width: 290px) {
    width: 85%;
  }
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 35px;
  padding: 10px 5px;
  border-bottom: solid 1px #e6d6d6;
  border-top: solid 1px #e6d6d6;
`;
const BackgoundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Text = styled.span`
  @media (max-width: 414px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
  @media (max-width: 290px) {
    font-size: 1.4rem;
  }
  font-size: 1.25rem;
  margin: 2px;
  width: 100%;
  text-align: center;
  &.t1 {
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.4rem;
    }
    font-size: 1.3rem;
    text-align: left;
  }
  &.t2 {
    @media (max-width: 414px) {
      font-size: 1.6rem;
    }
    display: flex;
    margin-left: 15px;
    font-size: 1.5rem;
  }
`;
