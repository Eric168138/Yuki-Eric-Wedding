import styled from 'styled-components';
import { TextCategoryTitle, EmptyBox, Flex, Flower } from '../styles';
import HeartIcon from '../components/Icons/heart';
import useCopyClipboard from '../hooks/useCopyClipboard';
import { toast } from 'react-toastify';
import { DdayCount, TheTimes } from '../components/DdayCount';

const targetDate = new Date(2026, 10, 1, 12, 0);

export default function CalendarSection() {
  const { copyToClipboard } = useCopyClipboard();
  const notify = (target) => toast(`${target} 地址已复制。`);
  const isPast = new Date() > targetDate;
  return (
    <Container>
      <Flex>
        <TextCategoryTitle id="schedule">日程</TextCategoryTitle>
      </Flex>
      <Flex>
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Text className="h">2026年11月1日</Text>
          <ScheduleTable>
            <tbody>
              <tr>
                <td className="time">12:00 恭候</td>
                <td className="divider"></td>
                <td className="event">
                  <Text
                    className="p"
                    onClick={() => {
                      copyToClipboard('香港九龍塘根德道7號 My Palace');
                      notify(`香港九龍塘根德道7號 My Palace`);
                    }}
                  >
                    香港九龍塘根德道7號 My Palace
                  </Text>
                </td>
              </tr>
              <tr>
                <td className="time">12:30 證婚</td>
                <td className="divider"></td>
                <td className="event">天台 Sky Hall</td>
              </tr>
              <tr>
                <td className="time">13:30 入席</td>
                <td className="divider"></td>
                <td className="event">地面 Grand Hall </td>
              </tr>
              <tr>
                <td className="time"></td>
                <td className="divider"></td>
                <td className="event">有留言電話同PhotoBooth,早D黎玩</td>
              </tr>
            </tbody>
          </ScheduleTable>
          <Image
            src={process.env.PUBLIC_URL + '/image/calendar.png'}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
          />
        </TextWrapper>
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Flex>
            {isPast ? <TheTimes targetDate={targetDate} /> : <DdayCount targetDate={targetDate} />}
          </Flex>
        </TextWrapper>
        <EmptyBox />
        <Flower className="f-t" src={process.env.PUBLIC_URL + '/image/flower.png'} />
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
  &.h {
    font-size: 2rem;
    font-weight: 600;
  }
  &.countDownText {
    padding-top: 12px;
    padding-bottom: 4px;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto 5px;
  width: 75%;
`;

const TextWrapper = styled.div``;

const ScheduleTable = styled.table`
  margin: 0 auto;
  background: transparent;
  border-collapse: collapse;

  td {
    padding: 4px 12px;
    font-size: 1.4rem;
    text-align: left;
    background: transparent;
  }

  td.time {
    white-space: nowrap;
  }

  td.divider {
    width: 1px;
    padding: 0;
    background: #ccc;
    background-clip: content-box;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  td.event {
    white-space: nowrap;
  }
`;
