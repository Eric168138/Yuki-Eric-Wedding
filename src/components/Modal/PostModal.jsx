import styled from "styled-components";
import Button from "../Button/Button";
import { Dimed } from "./ConnectInfoModal";
import TextInput from "../Input/TextInput";
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import IconButton from "../Button/IconButton";
import CloseSvg from "../Icons/close";

const PostModal = ({ isModalOpen, handleCloseModal }) => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [author, setAuthor] = useState("");
  const [element, setElement] = useState(false);

  const onCreateGuestBook = () => {
    if (title.length === 0) return;
    if (title.length >= 100) {
      alert("祝贺语请在100字以内撰写。");
      return;
    }

    alert("活动已经结束了。");
    handleCloseModal();
  };

  useEffect(() => {
    setElement(document.getElementById("modal"));
  }, []);

  if (!element) return <></>;

  if (!isModalOpen) return null;

  return ReactDom.createPortal(
    <>
      <Container className={isModalOpen ? "" : "disabled"}>
        <Header>
          <HeaderTextWrapper>
            <HeaderText>💐写祝贺留言</HeaderText>
          </HeaderTextWrapper>
          <IconButtonWrapper>
            <IconButton onClick={handleCloseModal}>
              <CloseSvg />
            </IconButton>
          </IconButtonWrapper>
        </Header>

        <Wrapper>
          <TextWrapper>
            <TextInput value={author} onChange={e => setAuthor(e.target.value)} type="text" label={"姓名"} />
          </TextWrapper>
          <TextWrapper>
            <TextInput value={password} onChange={e => setPassword(e.target.value)} type="password" label={"密码"} />
          </TextWrapper>
          <TextWrapper>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} type="text" label={"请撰写祝贺语！(100字以内)"} textArea />
          </TextWrapper>
          <Button className="button" onClick={onCreateGuestBook}>
            向新郎新娘传达祝贺信
          </Button>
        </Wrapper>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>,
    element
  );
};

const Header = styled.header`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #dbdbdb;
  position: absolute;
  z-index: 999;
  top: 0;
`;

const HeaderText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;
const HeaderTextWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
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
  height: 100%;

  max-width: 435px;

  margin: 0 auto;
  &.disable {
    display: none;
  }
`;

const IconButtonWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const Wrapper = styled.div`
  padding: 24px;
  padding-top: 72px;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  box-shadow: 2px 3px 3px 0.2em #67676728;

  box-sizing: border-box;

  .button {
    width: 100%;
    height: 48px;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 24px 0;
`;

export default PostModal;
