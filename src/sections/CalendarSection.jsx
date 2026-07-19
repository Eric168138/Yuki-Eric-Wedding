import styled from "styled-components";
import { EmptyBox, Flex } from "../styles";
import HeartIcon from "../components/Icons/heart";

import { DdayCount, TheTimes } from "../components/DdayCount";

const targetDate = new Date(2025, 11, 1, 12, 0);

export default function CalendarSection() {
  const isPast = new Date() > targetDate;
  return (
    <Container>
      <Flex>
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Text>2026年11月1日</Text>
          <Text>12:00 恭候</Text>
          <Text>12:30 證婚</Text>
          <Text>13:30 入席</Text>
          <Text>香港九龍塘根德道7號 My Palace
</Text>
        </TextWrapper>
        {/* <EmptyBox /> */}
        <Image src={process.env.PUBLIC_URL + "/image/calendar.png"} data-aos="flip-left" data-aos-easing="ease-out-cubic" />
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          {/* <Text className="countDownText">
            钟范
            <HeartIcon />
            裕贞
          </Text> */}

          <Flex>
            {isPast
              ? <TheTimes targetDate={targetDate} />
              : <DdayCount targetDate={targetDate} />
            }
          </Flex>
        </TextWrapper>
      </Flex>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  padding-top: 48px;
`;

const Text = styled.p`
  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &.countDownText {
    padding-top: 12px;
    padding-bottom: 4px;
  }
`;

const Image = styled.img`
  margin-bottom: 50px;
  width: 75%;
`;

const TextWrapper = styled.div``;
