require("dotenv").config();

Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
console.log(Kakao.isInitialized()); // 输入要使用的应用的JavaScript密钥

Kakao.Share.createDefaultButton({
  container: "#kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
    title: "苏钟范 🧡 权裕贞 结婚了。",
    description: "6月2日 (日) 下午12时10分, 昌原 Hill Sky 10楼 Hill Grand Hall",
    imageUrl: `${window.location.origin}${process.env.PUBLIC_URL}/image/gallery/8.jpeg`,
    link: {
      // 需与[我的应用]>[平台]中注册的网站域名一致
      webUrl: "https://www.inviteyou.info",
    },
  },
  buttons: [
    {
      title: "查看邀请函",
      link: {
        mobileWebUrl: "https://www.inviteyou.info",
        webUrl: "https://www.inviteyou.info",
      },
    },
  ],
});
