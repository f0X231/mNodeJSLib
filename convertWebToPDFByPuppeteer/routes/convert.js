var express = require("express");
const puppeteer = require("puppeteer");
var router = express.Router();

/* GET users listing. */
router.get("/pdf", async function (req, res, next) {
  const browser = await puppeteer.launch();
  const webPage = await browser.newPage();
  const url = "https://livecodestream.dev/post";
  await webPage.goto(url, {
    waitUntil: "networkidle0",
  });
  const pdf = await webPage.pdf({
    printBackground: true,
    path: "webpage.pdf",
    format: "Letter",
    margin: {
      top: "20px",
      bottom: "40px",
      left: "20px",
      right: "20px",
    },
  });

  await browser.close();

  res.contentType("application/pdf");
  res.send(pdf);
});

module.exports = router;

// ref : https://livecodestream.dev/post/convert-web-pages-into-pdfs-with-puppeteer-and-nodejs/
