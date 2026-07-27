import express from "express";
import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import { ServerStyleSheet } from "styled-components";

const sheet = new ServerStyleSheet();
const app = express();
// 讀取客戶端構建的html使用
const html = fs.readFileSync(path.resolve(__dirname, "../client/index.html"), "utf-8");

app.get("/", (req, res) => {
  const renderString = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  const result = html
    .replace('<div id="root"></div>', `<div id="root">${renderString}</div>`)
    .replace("__STYLE_FROM_SERVER__", styleTags);
  res.send(result);
});
// 除上述 / 以外的路徑請求時(js, css等)
// 提供dist/client文件夾中的文件
app.use("/", express.static("dist/client"));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
