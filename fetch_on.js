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
    const result = [];
    const brewerTable = $("#brewercontainer > div");
    brewerTable.each(function () {
      let title = $(this).find(".entry-title").text().trim();
      let url = $(this).find("a:contains('Website')").attr("href");
      let webStore = $(this).find("a:contains('Store')").attr("href");
      console.log(title, url, webStore);
      result.push({ title, url, webStore });
    });

    console.log(result);
  })
  .catch(console.error);
