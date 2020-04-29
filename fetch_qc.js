// Fetch QC breweries
// Go to address, fetch each brewery's URL

const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://ambq.ca/microbrasseries";

fetchData(url).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html);
  const brewerTable = $(".list-microbrasserie > li");
  const result = [];
  brewerTable.each(function () {
    let title = $(this).find("a").text().trim();
    let url = $(this).find("a").attr("href");
    console.log(title, url);
    result.push({ title, url });
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
