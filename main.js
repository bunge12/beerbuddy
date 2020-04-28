// main.js

const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://bccraftbeer.com/our-breweries/";

fetchData(url).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html);
  const statsTable = $(
    "script[type='text/javascript']:contains('map_json')"
  ).first();
  // console.log(statsTable);
  statsTable.each(function () {
    const data = this.children[0].data;

    console.log(data);
  });
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
