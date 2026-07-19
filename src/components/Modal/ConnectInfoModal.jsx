import styled from "styled-components";
import { useRecoilState } from "recoil";
import infoModalState from "../../store/infoModal";
import "react-toastify/dist/ReactToastify.css";

const people_info = [
  { account: "", phone: "" },
  { account: "", phone: "" },
  { account: "", phone: "" },
  { account: "", phone: "" },
  { account: "", phone: "" },
  { account: "", phone: "" },
];

export default function ConnectInfoModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(infoModalState);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (typeof window !== "object") {
    return <></>;
  }

  return (
    <>
      <Container className={isModalOpen ? "" : "disable"}>
        <Flex>
          <H1Text>传达心意的地方💐</H1Text>
          <GuideWrapper>
            <NameWrapper>
              *<CallingBox>祝贺电话📞</CallingBox> <GuideText>点击后将连接到通讯录。 </GuideText>
            </NameWrapper>
            <NameWrapper>
              *<MessageBox>祝贺短信 ✉️</MessageBox>
              <GuideText>点击后将连接到短信。</GuideText>
            </NameWrapper>
          </GuideWrapper>
          <NameListWrapper>
            <Text className="h2">新郎💍新娘</Text>
            <NameWrapper>
              <Text>新郎 </Text> <B>苏钟范</B>
              <CallingBox onClick={() => alert("当前活动已完成。")}>祝贺电话📞</CallingBox>
              <MessageBox onClick={() => alert("当前活动已完成。")}>祝贺短信 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>新娘 </Text> <B>权裕贞</B>
              <CallingBox onClick={() => alert("当前活动已完成。")}>祝贺电话📞</CallingBox>
              <MessageBox onClick={() => alert("当前活动已完成。")}>祝贺短信 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <NameListWrapper>
            <NameWrapper>
              <Text className="h2 blue">新郎</Text>
              <Text className="h2 ">婚主方</Text>
            </NameWrapper>

            <NameWrapper>
              <Text>新郎父亲 </Text> <B>苏永植</B>
              <CallingBox onClick={() => alert("当前活动已完成。")}>祝贺电话📞</CallingBox>
              <MessageBox onClick={() => alert("当前活动已完成。")}>祝贺短信 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>新郎母亲 </Text> <B>朴淑女</B>
              <CallingBox onClick={() => alert("当前活动已完成。")}>祝贺电话📞</CallingBox>
              <MessageBox onClick={() => alert("当前活动已完成。")}>祝贺短信 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <NameListWrapper>
            <NameWrapper>
              <Text className="h2 pink">新娘</Text>
              <Text className="h2 ">婚主方</Text>
            </NameWrapper>

            <NameWrapper>
              <Text>新娘父亲 </Text> <B>权泰建</B>
              <CallingBox onClick={() => alert("当前活动已完成。")}>祝贺电话📞</CallingBox>
              <MessageBox onClick={() => alert("当前活动已完成。")}>祝贺短信 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>新娘母亲 </Text> <B>马恩英</B>
              <CallingBox onClick={() => alert("当前活动已完成。")}>祝贺电话📞</CallingBox>
              <MessageBox onClick={() => alert("当前活动已完成。")}>祝贺短信 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <CloseButton onClick={handleCloseModal}>关闭</CloseButton>
        </Flex>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}
const NameListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;
const Text = styled.p`
  @media (min-width: 399px) {
    font-size: 1.2rem;
  }
  @media (max-width: 398px) {
    font-size: 1.2rem;
  }
  @media (max-width: 394px) {
    font-size: 1.2rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
  @media (max-width: 358px) {
    font-size: 1.25rem;
  }
  @media (max-width: 318px) and(min-width: 317px) {
    font-size: 1.3rem;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
  }
  @media (max-width: 280px) {
    font-size: 1.1rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }

  font-size: 1.1rem;

  &.h2 {
    @media (min-width: 399px) {
      font-size: 1.2rem;
    }
    @media (max-width: 393px) {
      font-size: 1.1rem;
    }
    @media (max-width: 375px) {
      font-size: 1.1rem;
    }
    @media (max-width: 360px) {
      font-size: 1.2rem;
    }
    @media (max-width: 290px) {
      font-size: 1.1rem;
    }
    @media (max-width: 274px) {
      font-size: 1rem;
    }
    font-size: 1rem;
    color: #5e5d5d;
  }

  &.blue {
    @media (min-width: 399px) {
      font-size: 1.3rem;
    }
    @media (max-width: 375px) {
      font-size: 1.3rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.2rem;
    }
    @media (max-width: 274px) {
      font-size: 1rem;
    }
    color: #5baddc;
    font-weight: 600;
  }
  &.pink {
    @media (min-width: 399px) {
      font-size: 1.3rem;
    }
    @media (max-width: 375px) {
      font-size: 1.3rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.2rem;
    }
    @media (max-width: 274px) {
      font-size: 1rem;
    }
    color: #f8acb9;
    font-weight: 600;
  }
`;

const H1Text = styled(Text)`
  @media (max-width: 375px) {
    font-size: 1.7rem;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }

  @media (max-width: 290px) {
    font-size: 1.7rem;
  }
  @media (max-width: 274px) {
    font-size: 1.5rem;
  }
  font-size: 1.7rem;
  font-weight: 600;
  color: #5e5e5e;
`;

const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const GuideText = styled.p`
  @media (min-width: 431px) {
    font-size: 1.1rem;
  }
  @media (max-width: 430px) {
    font-size: 1.15rem;
  }
  @media (max-width: 412px) {
    font-size: 1.2rem;
  }
  @media (max-width: 397px) {
    font-size: 1rem;
  }
  @media (max-width: 394px) {
    font-size: 1.1rem;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.2rem;
    color: #000;
  }
  @media (max-width: 358px) {
    font-size: 1.2rem;
  }

  @media (max-width: 290px) {
    font-size: 1.2rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }
  color: #504f4f;
  font-size: 1rem;
`;

const B = styled.p`
  @media (min-width: 431px) {
    font-size: 1.2rem;
  }
  @media (max-width: 430px) {
    font-size: 1.2rem;
  }
  @media (max-width: 412px) {
    font-size: 1.2rem;
  }
  @media (max-width: 398px) {
    font-size: 1.2rem;
  }
  @media (max-width: 394px) {
    font-size: 1.2rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
  @media (max-width: 358px) {
    font-size: 1.2rem;
  }
  @media (max-width: 356px) {
    font-size: 1.2rem;
  }
  @media (max-width: 318px) and(min-width: 317px) {
    font-size: 1.3rem;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
  }
  @media (max-width: 280px) {
    font-size: 1.2rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }

  font-size: 1rem;
  font-weight: 600;
`;

const MessageBox = styled.div`
  @media (min-width: 413px) {
    font-size: 1.1rem;
  }
  @media (max-width: 412px) {
    font-size: 1rem;
  }
  @media (max-width: 397px) {
    font-size: 1rem;
  }
  @media (max-width: 394px) {
    font-size: 1rem;
  }
  @media (max-width: 393px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
  @media (max-width: 358px) {
    font-size: 1rem;
  }
  @media (max-width: 356px) {
    font-size: 1rem;
  }
  @media (max-width: 290px) {
    font-size: 1rem;
  }
  @media (max-width: 280px) {
    font-size: 1rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }
  font-size: 1rem;
  border-radius: 5px;
  background-color: #f7deabac;
  padding: 2px 5px;
  cursor: pointer;
`;

const CallingBox = styled.div`
  @media (min-width: 413px) {
    font-size: 1.1rem;
  }
  @media (max-width: 412px) {
    font-size: 1rem;
  }
  @media (max-width: 397px) {
    font-size: 1rem;
  }
  @media (max-width: 394px) {
    font-size: 1rem;
  }
  @media (max-width: 393px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
  @media (max-width: 358px) {
    font-size: 1rem;
  }
  @media (max-width: 356px) {
    font-size: 1rem;
  }
  @media (max-width: 290px) {
    font-size: 1rem;
  }
  @media (max-width: 280px) {
    font-size: 1.1rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }
  font-size: 1rem;
  border-radius: 5px;
  background-color: #9ad49b81;
  padding: 2px 3px;
  cursor: pointer;
  &.onebtn {
    text-align: center;
    width: 137px;
  }
`;

export const Dimed = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.3;
  display: block;

  &.disable {
    display: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  width: 100%;
  max-width: 435px;

  &.disable {
    display: none;
  }
`;

export const Flex = styled.div`
  @media (min-width: 413px) {
    width: 90%;
  }
  @media (max-width: 412px) {
    width: 28rem;
  }
  @media (max-width: 393px) {
    width: 27rem;
  }
  @media (max-width: 390px) {
    width: 28rem;
  }
  @media (max-width: 375px) {
    width: 30rem;
  }
  @media (max-width: 360px) {
    width: 28rem;
  }
  @media (max-width: 358px) {
    width: 28rem;
  }
  @media (max-width: 356px) {
    width: 31rem;
  }
  @media (max-width: 318px) and(min-width: 317px) {
    width: 34rem;
  }
  @media (max-width: 290px) {
    width: 30rem;
    padding: 45px 10px 25px 10px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  height: 40%;
  border-radius: 12px;
  padding: 45px 14px 25px 14px;
  box-shadow: 2px 3px 3px 0.2em #67676728;
  gap: 30px;
`;

const CloseButton = styled.button`
  @media (max-width: 375px) {
    padding: 6px 8px;
  }

  &:hover {
    color: #9b9389;
    background-color: #b2aaa1;
  }
  border: none;
  border: 0px;
  background-color: #c8bbad;
  font-family: "GowunDodum-Regular";
  border-radius: 10px;
  padding: 8px 12px;
  width: 45%;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 7px;
  box-shadow: 2px 2px 0.3em #67676728;
`;
