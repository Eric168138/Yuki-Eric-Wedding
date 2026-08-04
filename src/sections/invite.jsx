import { TextWrapper, Text } from '../styles';
import styled from 'styled-components';

export default function Invite({ height }) {
  return (
    <StyledWrapper style={{ height }}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/chenyuluoyan-font@1.0.0/css/chenyuluoyan.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/iannsoo-font@1.0.0/css/iannsoo.css"
      />
      <InviteText
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="600"
        style={{ fontFamily: 'yleeMortalHeart-ImmortalMemory' }}
      >
        Invite you
      </InviteText>
      <Text
        className="t2 mb-18"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="900"
        style={{ fontFamily: "'ChenYuluoyan', cursive" }}
      >
        邀請你參加 Yuki 同 Eric 的婚禮
      </Text>
    </StyledWrapper>
  );
}

const InviteText = styled.p`
  margin-bottom: 0;
  font-size: 4rem;
  padding: 4px;
`;

const StyledWrapper = styled(TextWrapper)`
  height: 100%;
  justify-content: center;
  background-color: transparent;
`;
