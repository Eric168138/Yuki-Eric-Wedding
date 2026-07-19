import { TextCategoryTitle, EmptyBox } from "../styles";
import styled from "styled-components";
import useCopyClipboard from "../hooks/useCopyClipboard";
import { toast } from "react-toastify";

/**
 *
 * absolute元素按最近的relative父标签顺序受到影响。
 *
 */
export default function Location({ ref }) {
  const { copyToClipboard } = useCopyClipboard();
  const notify = target => toast(`${target} 地址已复制。`);

  return (
    <Container ref={ref}>
      <Flex>
        <EmptyBox />
        <TextCategoryTitle id="location">location</TextCategoryTitle>
        <Text>香港九龍塘根德道7號 My Palace
</Text>
        <Text>2026年11月1日</Text>
        <Text>中午 12:00 恭候</Text>
        {/* <MapWrapper>
          <StyledA href="https://map.kakao.com/link/search/창원 힐스타이웨딩">
            <MapIcon src={process.env.PUBLIC_URL + "/nav-icon/kakaomap.png"} />
          </StyledA>
          <StyledA href="https://map.naver.com/p/search/%EC%B0%BD%EC%9B%90%20%ED%9E%90%20%EC%8A%A4%EC%B9%B4%EC%9D%B4%20%EC%9B%A8%EB%94%A9">
            <MapIcon src={process.env.PUBLIC_URL + "/nav-icon/navermap.png"} />
          </StyledA>
          <StyledA href="https://tmap.life/62ffaa39">
            <MapIcon src={process.env.PUBLIC_URL + "/nav-icon/tmap.png"} />
          </StyledA>
          <StyledA href="https://www.google.com/maps/dir//%ED%9E%90%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EC%9B%A8%EB%94%A9%26%EC%BB%A8%EB%B2%A4%EC%85%98+Gyeongsangnam-do,+Changwon-si,+Masanhoewon-gu,+Bongam-dong,+133/data=!4m8!4m7!1m0!1m5!1m1!1s0x356f33b97d989541:0x43b9f3c30f6c73d2!2m2!1d128.6014549!2d35.2190478?entry=ttu">
            <MapIcon src={process.env.PUBLIC_URL + "/nav-icon/googlemap.png"} />
          </StyledA>
        </MapWrapper> */}
      </Flex>
      <Flex>
        <LocationInfoBox>
          <ImageWedding src={process.env.PUBLIC_URL + "/image/weddingholl-image.jpg"} />
          <Text className="tb">📍地址</Text>
          <Text
            className="doc"
            onClick={() => {
              copyToClipboard("香港九龍塘根德道7號 My Palace");
              notify(`地址`);
            }}
          >
           香港九龍塘根德道7號 My Palace
          </Text>
          {/* <Text className="tb">📍 地番地址</Text>
          <Text
            className="doc"
            onClick={() => {
              copyToClipboard("凤岩洞 391-205");
              notify(`地番`);
            }}
          >
           凤岩洞 391-205
          </Text> */}
          <Text className="tb">🚌 乘坐公交车来的情况</Text>
          <Text className="doc">
            <B>凤岩工业园区入口</B>下车
          </Text>
          <Text className="doc">干线 - 107, 114, 160, 116, 162, 163, 164</Text>
          <Text className="doc">支线 - 257</Text>
          <Text className="doc">座席 - 740, 3002</Text>
          <Text className="tb">🚙 使用私家车的情况</Text>
          <Text className="doc">
            ✔️ 凤岩工业园区十字路口, 昌原站, 马山市外巴士客运站, 马山水产市场, 马山站 京田线(<B>马山 凤岩水源地入口</B> 掉头后 <B>直行300m</B>)
          </Text>
          <Text className="doc">✔️ 镇海, 昌原, 市外巴士客运站, 昌原大路 Hill Sky 前到达</Text>
          <Text className="doc">
            ✔️ <B>使用自由地区桥时</B> 经过GS自助加油站 CU便利店左转
          </Text>
          <Text className="doc">
            ✔️ <B>使用高速公路时</B> 东马山IC进入 距离10分钟
          </Text>
        </LocationInfoBox>
        <EmptyBox />
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0ede6;
`;

export const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 0px;
  margin: 0px;
  border: 0px;
`;

const ImageWedding = styled.img`
  width: 100%;
  margin-top: 12px;
`;

const LocationInfoBox = styled.div`
  @media (max-width: 430px) {
    width: 85%;
  }
  width: 80%;
`;

const MapWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const MapIcon = styled.img`
  border-radius: 12px;
  width: 75%;
  margin: 5px;
  box-shadow: 2px 2px 0.3em #67676728;
`;

const Text = styled.p`
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
  @media (max-width: 393px) {
    font-size: 1.3rem;
  }
  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 1.6rem;
  }
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  @media (max-width: 290px) {
    font-size: 1.6rem;
  }
  font-size: 1.35rem;
  &.doc {
    @media (max-width: 430px) {
      font-size: 1.5rem;
    }
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 393px) {
      font-size: 1.3rem;
    }
    @media (max-width: 390px) {
      font-size: 1.5rem;
    }
    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.6rem;
    }
  }
  &.t {
    @media (max-width: 430px) {
      font-size: 1.4rem;
    }
    @media (max-width: 414px) {
      font-size: 1.6rem;
    }
    @media (max-width: 393px) {
      font-size: 1.4rem;
    }
    @media (max-width: 390px) {
      font-size: 1.5rem;
    }
    @media (max-width: 375px) {
      font-size: 1.6rem;
    }
    font-size: 1.5rem;
  }

  &.tb {
    font-weight: 700;
    margin-top: 12px;
  }
`;

const B = styled.span`
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
  @media (max-width: 414px) {
    font-size: 1.4rem;
  }
  @media (max-width: 412px) {
    font-size: 1.4rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 390px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
  font-weight: 600;
  font-size: 1.1rem;
`;
