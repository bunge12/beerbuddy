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

input.forEach((element) => {
  const address = element.url;
  console.log(address);
});
