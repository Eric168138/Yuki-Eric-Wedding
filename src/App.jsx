// styles
import "./font.css";
import "./App.css";
import styled from "styled-components";

// hooks
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

// component
import Starting from "./sections/Starting";
import Invite from "./sections/invite";
import OnePage from "./sections/onePage";
import Poster from "./sections/Poster";
import Poetry from "./sections/Poetry";
import Calendar from "./sections/CalendarSection";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import WeddingInfo from "./sections/WeddingInfo";
import Posting from "./sections/Posting";
import Ending from "./sections/Ending";
import Footer from "./sections/Footer";
import ConnectInfoModal from "./components/Modal/ConnectInfoModal";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// toast
import { ToastContainer } from "react-toastify";

import Sound from "./components/Sound/Sound";
import { BrowserRouter } from "react-router-dom";

// icon

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 20,
    });
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setIsShow(() => true);
    }, 400);

    const hideTimeout = setTimeout(() => {
      setIsShow(() => false);
    }, 2200);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <PageWrapper>
          <StyledLayout>
            <Sound />
            <StyledNav className={isShow ? "active" : ""}>已为您准备好背景音乐。</StyledNav>
            {isMounted && (
              <>
                <OnePage>
                  <Invite height="10%" />
                  <Starting height="90%" />
                </OnePage>
                <Poetry />
                <Calendar />
                <Location />
                <Gallery />
                {/* <WeddingInfo />
                <Posting /> */}
                <Poster />
                <Ending />
                <Footer />
              </>
            )}
          </StyledLayout>
          <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
          <ConnectInfoModal />
        </PageWrapper>
      </RecoilRoot>
    </BrowserRouter>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${// gap: 40px; 
  ''}
  background: #fff;

  @media (max-width: 360px) {
    max-width: 360px;
  }
`;

const StyledNav = styled.div`
  @media (max-width: 360px) {
    max-width: 360px;
  }

  width: 100%;
  max-width: 800px;
  height: 48px;
  position: absolute;
  top: 0;

  transform: translateY(-48px);

  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;

  background-color: #f0ede6;
  color: #606060;
  &.active {
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url("${process.env.PUBLIC_URL}/image/background.jpg");
  background-repeat: repeat-y;
  background-size: 100% auto;
  background-position: center top;

  @media (max-width: 800px) {
    background-image: none;
  }
`;

export default App;
