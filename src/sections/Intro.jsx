import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Intro() {
  const textRef = useRef();

  const [fadeout, setFadeout] = useState(false);

  //编写javascript
  const string = "苏钟范 ♥️ 权裕贞 2024年6月2日 结婚了。"; //在string变量中声明想要的文本
  const split = string.split(""); //将string的文本分成多个字符串

  function dynamic(arr) {
    if (arr.length > 0) {
      textRef.current.textContent += arr.shift();
      setTimeout(function () {
        dynamic(arr);
      }, 60);
    }
  }

  useEffect(() => {
    function blink() {
      textRef.current.classList.toggle("active"); // 反复给dynamic添加<->删除active类
    }
    setInterval(blink, 500); // 每0.5秒执行blink函数
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFadeout(true);
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      dynamic(split); //将split参数传入dynamic函数执行
    }, [800]);
    // eslint-disable-next-line
  }, []);
  return (
    <Container className={fadeout ? "fadeout" : ""}>
      <Wrapper>
        <Flex>
          <div className="hero">
            <p id="dynamic" ref={textRef}></p>
          </div>
        </Flex>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8d0d7ab;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 999;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: opacity 0.6s ease-in-out;

  &.fadeout {
    opacity: 0;
    z-index: -999;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;

  .hero {
    @media (max-width: 430px) {
      font-size: 1.3rem;
    }
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 375px) {
      font-size: 1.6rem;
    }
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
    font-size: 1.4rem;
    color: black;
  }
  .hero #dynamic {
    @media (max-width: 430px) {
      font-size: 1.3rem;
    }
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 375px) {
      font-size: 1.6rem;
    }
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
    position: relative;
    display: inline-block;
    font-size: 1.7rem;
    color: black;
  }

  /*制作光标形状*/
  .hero #dynamic::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -10px;
    width: 4px;
    height: 100%;
    background-color: black;
  }

  .hero #dynamic.active::after {
    display: none; /*如果有active类则不显示*/
  }
`;
