require('dotenv').config();

Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
console.log(Kakao.isInitialized()); // 輸入要使用的應用的JavaScript密鑰

Kakao.Share.createDefaultButton({
  container: '#kakaotalk-sharing-btn',
  objectType: 'feed',
  content: {
    title: 'Yuki💍Eric 結婚了',
    description: '2026年11月1日 (日) 中午12時00分, 香港九龍塘根德道7號 My Palace',
    imageUrl: `${window.location.origin}${process.env.PUBLIC_URL}/image/gallery/8.jpeg`,
    link: {
      // 需與[我的應用]>[平台]中註冊的網站域名一致
      webUrl: 'https://www.inviteyou.info',
    },
  },
  buttons: [
    {
      title: '查看邀請函',
      link: {
        mobileWebUrl: 'https://www.inviteyou.info',
        webUrl: 'https://www.inviteyou.info',
      },
    },
  ],
});
