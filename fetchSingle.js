const input = [
  {
    name: "33 Acres Brewing",
    url: "https://bccraftbeer.com/brewery/33-acres-brewing/",
  },
  {
    name: "4 Mile Brewing Co.",
    url: "https://bccraftbeer.com/brewery/four-mile-brewing-co/",
  },
  {
    name: "A-FRAME Brewing",
    url: "https://bccraftbeer.com/brewery/a-frame-brewing/",
  },
  {
    name: "Ace Brewing Company",
    url: "https://bccraftbeer.com/brewery/ace-brewing-company/",
  },
];

const axios = require("axios");
const cheerio = require("cheerio");

async function fetchData(url) {
  // make http call to url
  let response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log("Error occurred while fetching data");
    return;
  }
  return response;
}

input.forEach((element) => {
  const address = element.url;
  fetchData(address).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const statsTable = $(".offers");
    statsTable.each(function () {
      console.log(`Data for ${address}`);
      let online = $(this).find("span").text();
      console.log(online);
    });
  });
});
