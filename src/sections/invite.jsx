import { TextWrapper, Text } from "../styles";
import styled from "styled-components";

export default function Invite({ height }) {
  return (
    <StyledWrapper style={{ height }}>
      <InviteText
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1200"
        style={{ fontFamily: "yleeMortalHeart-ImmortalMemory" }}
      >
        Invite you
      </InviteText>
      <Text className="t2 mb-18" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1800">
        邀請你參加 Yuki 同 Eric 的婚禮
      </Text>
    </StyledWrapper>
  );
}

const InviteText = styled.p`
  font-size: 1.2rem;
  /* margin-top: 3rem; */
  margin-bottom: 0;
  font-size: 4rem;
  padding: 4px;
`;

const StyledWrapper = styled(TextWrapper)`
  height: 100%;
  justify-content: center;
`;
