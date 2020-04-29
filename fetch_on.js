// fetch_on.js -> fetch Ontario breweries
// Go to address, fetch each brewery's URL

const cheerio = require("cheerio");
const url = "https://www.ontariocraftbrewers.com/Beer.html";
const puppeteer = require("puppeteer");

puppeteer
  .launch()
  .then((browser) => browser.newPage())
  .then((page) => {
    return page.goto(url).then(function () {
      return page.content();
    });
  })
  .then((html) => {
    const $ = cheerio.load(html);
    const newsHeadlines = [];
    const brewerTable = $("#brewercontainer > div");
    brewerTable.each(function () {
      let title = $(this).find(".entry-title").text().trim();
      let address = $(this).find(".entry").attr("href");
      console.log(title);
      // result.push({ name: title, url: address });
    });
    // $("#BrewerList > row").each(function () {
    //   console.log(this);
    //   // newsHeadlines.push({
    //   //   title: $(this).text(),
    //   // });
    // });

    // console.log(newsHeadlines);
  })
  .catch(console.error);
