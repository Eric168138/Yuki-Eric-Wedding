import { TextCategoryTitle, EmptyBox } from '../styles';
import styled from 'styled-components';
import useCopyClipboard from '../hooks/useCopyClipboard';
import { toast } from 'react-toastify';

/**
 *
 * absolute元素按最近的relative父標籤順序受到影響。
 *
 */
export default function Location({ ref }) {
  const { copyToClipboard } = useCopyClipboard();
  const notify = (target) => toast(`${target} 文字已複製`);

  return (
    <Container ref={ref}>
      <Flex>
        <EmptyBox />
        <TextCategoryTitle id="location">位置</TextCategoryTitle>
      </Flex>
      {/* <Flex>
        <EmptyBox />
        <TextCategoryTitle id="location">location</TextCategoryTitle>
        <Text>香港九龍塘根德道7號 My Palace</Text>
        <Text>2026年11月1日</Text>
        <Text>中午 12:00 恭候</Text>
   
          <StyledA href="https://map.kakao.com/link/search/창원 힐스타이웨딩">
            <MapIcon src={process.env.PUBLIC_URL + "/nav-icon/kakaomap.png"} />
          </StyledA>
          <StyledA href="https://map.naver.com/p/search/%EC%B0%BD%EC%9B%90%20%ED%9E%90%20%EC%8A%A4%EC%B9%B4%EC%9D%B4%20%EC%9B%A8%EB%94%A9">
            <MapIcon src={process.env.PUBLIC_URL + "/nav-icon/navermap.png"} />
          </StyledA>
          <StyledA href="https://tmap.life/62ffaa39">
            <MapIcon src={process.env.PUBLIC_URL + "/nav-icon/tmap.png"} />
          </StyledA> 
      </Flex> */}
      <Flex>
        <LocationInfoBox>
          <ImageWedding src={process.env.PUBLIC_URL + '/image/weddingholl-image.jpg'} />
          <AddressRow>
            <Div>
              <Text className="tb">📍地址</Text>
              <Text
                className="p"
                onClick={() => {
                  copyToClipboard('香港九龍塘根德道7號 My Palace');
                  notify(`香港九龍塘根德道7號 My Palace`);
                }}
              >
                香港九龍塘根德道7號 My Palace
              </Text>
            </Div>
            <Div>
              <MapLink
                href="https://maps.app.goo.gl/3PqZdER4nSMxVeG88"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapTextGroup>
                  <ClickText>點擊開啟</ClickText>
                  <ClickText>GoogleMap</ClickText>
                </MapTextGroup>
                <MapIconSmall src={process.env.PUBLIC_URL + '/nav-icon/googlemap.png'} />
              </MapLink>
              {/* <MapLink
                href="https://surl.amap.com/2jNbsYqF5rC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapTextGroup>
                  <ClickText>點擊開啟</ClickText>
                  <ClickText>高德地圖</ClickText>
                </MapTextGroup>
              </MapLink> */}
            </Div>
          </AddressRow>
          <Text className="doc">&nbsp;</Text>
          <Text className="tb">🚅 乘坐地鐵的情況</Text>
          <Text className="doc">九龍塘站 G1, F, B 出口 </Text>
          <Text className="doc">G1和F出口 : 出去後向根德道往上行6分鐘</Text>
          <Text className="doc">B出口 : 出去後回頭,向根德道往上行6分鐘</Text>
          <Text className="doc">&nbsp;</Text>
          <Text className="tb">🚌 乘坐小巴，巴土的情況 </Text>
          <Text className="doc">近九龍塘(沙福道)公共運輸交匯處(總站),向根德道往上行10分。</Text>
          <Text className="doc">&nbsp;</Text>
          <Text className="tb">🚙 使用私家車的情況</Text>
          <Text className="doc">場地沒有賓客停泊,建議公共交通公具來臨比較方便。</Text>
          <Text className="doc">
            最近停車場為又一城停車場,泊車後去又一城LG2層天橋出口,過橋後向根德道往上行,全程大約15分鐘。
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

const Div = styled.div`
  text-align: left;
`;

const AddressRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MapTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
`;

const MapLink = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  text-decoration: none;
`;

const MapIconSmall = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;

  @media (max-width: 430px) {
    width: 56px;
    height: 56px;
  }
`;

const ClickText = styled.span`
  font-size: 1rem;
  color: #888;
  white-space: nowrap;

  @media (max-width: 430px) {
    font-size: 1rem;
  }
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
    margin-top: 3px;
  }
  &.h {
    font-size: 2.5rem;
    margin-top: 3px;
    margin-button: 3px;
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
