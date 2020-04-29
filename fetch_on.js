// fetch_on.js -> fetch Ontario breweries
// Go to address, fetch each brewery's URL

const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://bccraftbeer.com/our-breweries/";

fetchData(url).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html);
  const statsTable = $("#list-inner > ul > li");
  const result = [];
  statsTable.each(function () {
    let title = $(this).find("a").text().trim();
    let address = $(this).find("a").attr("href");
    // console.log(title, address);
    result.push({ name: title, url: address });
  });
  console.log(result);
});

async function fetchData(url) {
  console.log("Crawling data...");
  // make http call to url
  let response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log("Error occurred while fetching data");
    return;
  }
  return response;
}
