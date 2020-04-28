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
  {
    name: "Andina Brewing Company",
    url: "https://bccraftbeer.com/brewery/andina-brewing-company/",
  },
  {
    name: "Angry Hen Brewing Co",
    url: "https://bccraftbeer.com/brewery/angry-hen-brewing-co/",
  },
  {
    name: "Another Beer Company Inc",
    url: "https://bccraftbeer.com/brewery/another-beer-company-inc/",
  },
  {
    name: "Backcountry Brewing",
    url: "https://bccraftbeer.com/brewery/backcountry-brewing/",
  },
  {
    name: "Backroads Brewing Company",
    url: "https://bccraftbeer.com/brewery/backroads-brewing-company/",
  },
  {
    name: "Bad Dog Brewing Company",
    url: "https://bccraftbeer.com/brewery/bad-dog-brewing-company/",
  },
  {
    name: "Bad Tattoo Brewing",
    url: "https://bccraftbeer.com/brewery/bad-tattoo/",
  },
  {
    name: "Barkerville Brewing",
    url: "https://bccraftbeer.com/brewery/barkerville-brewing/",
  },
  {
    name: "Barley Mill Brew Pub",
    url: "https://bccraftbeer.com/brewery/barley-mill-pub/",
  },
  {
    name: "Barley Station",
    url: "https://bccraftbeer.com/brewery/barley-station/",
  },
  {
    name: "Barn Owl Brewing Company",
    url: "https://bccraftbeer.com/brewery/barn-owl-brewing-company/",
  },
  {
    name: "Barnside Brewing Co Ltd",
    url: "https://bccraftbeer.com/brewery/barnside-brewing-co-ltd/",
  },
  {
    name: "Beach Fire Brewing and Nosh House",
    url: "https://bccraftbeer.com/brewery/beach-fire-brewing-co/",
  },
  {
    name: "Beard's Brewing Co",
    url: "https://bccraftbeer.com/brewery/beards-brewing-co/",
  },
  {
    name: "Beere Brewing",
    url: "https://bccraftbeer.com/brewery/beere-brewing/",
  },
  {
    name: "Big Ridge Brewing Co.",
    url: "https://bccraftbeer.com/brewery/big-ridge-brewing-co/",
  },
  {
    name: "Black Kettle Brewing Co",
    url: "https://bccraftbeer.com/brewery/black-kettle-brewing-co/",
  },
  {
    name: "BNA Brewing",
    url: "https://bccraftbeer.com/brewery/bna-brewing/",
  },
  {
    name: "Bomber Brewing",
    url: "https://bccraftbeer.com/brewery/bomber-brewing/",
  },
  {
    name: "Brassneck Brewery",
    url: "https://bccraftbeer.com/brewery/brassneck-brewery/",
  },
  {
    name: "BREWHALL BEER CO.",
    url: "https://bccraftbeer.com/brewery/brewhall-beer-co/",
  },
  {
    name: "Bricklayer Brewing",
    url: "https://bccraftbeer.com/brewery/bricklayer-brewing/",
  },
  {
    name: "Bridge Brewing Co",
    url: "https://bccraftbeer.com/brewery/bridge-brewing/",
  },
  {
    name: "Bright Eye Brewing",
    url: "https://bccraftbeer.com/brewery/bright-eye-brewing/",
  },
  {
    name: "Britannia Brewing",
    url: "https://bccraftbeer.com/brewery/britannia-brewing/",
  },
  {
    name: "Bulkley Valley Brewery",
    url: "https://bccraftbeer.com/brewery/bulkley-valley-brewery/",
  },
  {
    name: "Callister Brewing Company",
    url: "https://bccraftbeer.com/brewery/callister/",
  },
  {
    name: "Camp Beer Co",
    url: "https://bccraftbeer.com/brewery/camp-beer-co/",
  },
  {
    name: "Cannery Brewing Company",
    url: "https://bccraftbeer.com/brewery/cannery-brewing-company/",
  },
  {
    name: "Canoe Brewpub",
    url: "https://bccraftbeer.com/brewery/canoe-brewpub/",
  },
  {
    name: "Category 12 Brewing",
    url: "https://bccraftbeer.com/brewery/category-12/",
  },
  {
    name: "Central City Brewers + Distillers",
    url: "https://bccraftbeer.com/brewery/central-city/",
  },
  {
    name: "Central City Brewpub",
    url: "https://bccraftbeer.com/brewery/central-city-brewpub/",
  },
  {
    name: "Coast Mountain Brewing",
    url: "https://bccraftbeer.com/brewery/coast-mountain-brewing/",
  },
  {
    name: "Container Brewing Ltd.",
    url: "https://bccraftbeer.com/brewery/container-brewing-ltd/",
  },
  {
    name: "Craig Street Brewing Co.",
    url: "https://bccraftbeer.com/brewery/craig-street-brewing-co/",
  },
  {
    name: "Crannóg Ales",
    url: "https://bccraftbeer.com/brewery/crannog-ales/",
  },
  {
    name: "CrossRoads Brewing",
    url: "https://bccraftbeer.com/brewery/crossroads-brewing/",
  },
  {
    name: "Cumberland Brewing",
    url: "https://bccraftbeer.com/brewery/cumberland-brewing/",
  },
  {
    name: "Dageraad Brewing",
    url: "https://bccraftbeer.com/brewery/dageraad-brewing/",
  },
  {
    name: "Dead Frog Brewery",
    url: "https://bccraftbeer.com/brewery/dead-frog-brewery/",
  },
  {
    name: "Deep Cove Brewers & Distillers",
    url: "https://bccraftbeer.com/brewery/deep-cove-brewers-distillers/",
  },
  {
    name: "Dockside Brewing Company",
    url: "https://bccraftbeer.com/brewery/dockside-brewing-company/",
  },
  {
    name: "Dog Mountain Brewing",
    url: "https://bccraftbeer.com/brewery/dog-mountain-brewing/",
  },
  {
    name: "Driftwood Brewery",
    url: "https://bccraftbeer.com/brewery/driftwood-brewery/",
  },
  {
    name: "East Vancouver Brewing Co",
    url: "https://bccraftbeer.com/brewery/east-van-brewing-co/",
  },
  {
    name: "Electric Bicycle Brewing",
    url: "https://bccraftbeer.com/brewery/electric-bicycle-brewing/",
  },
  {
    name: "Elevation 57 Brewing Co",
    url: "https://bccraftbeer.com/brewery/elevation-57-brewing-co/",
  },
  {
    name: "Empty Keg Brew House",
    url: "https://bccraftbeer.com/brewery/empty-keg-brewhouse/",
  },
  {
    name: "Erie Creek Brewing Co",
    url: "https://bccraftbeer.com/brewery/erie-creek-brewing-co/",
  },
  {
    name: "Faculty Brewing Co",
    url: "https://bccraftbeer.com/brewery/faculty-brewing-co/",
  },
  {
    name: "Farm Country Brewing Inc",
    url: "https://bccraftbeer.com/brewery/farm-country-brewing-inc/",
  },
  {
    name: "Fernie Brewing Company",
    url: "https://bccraftbeer.com/brewery/fernie-brewing-company/",
  },
  {
    name: "Field House Brewing",
    url: "https://bccraftbeer.com/brewery/field-house-brewing/",
  },
  {
    name: "Firehall Brewery",
    url: "https://bccraftbeer.com/brewery/firehall-brewery/",
  },
  {
    name: "Fisher Peak Brewing Co",
    url: "https://bccraftbeer.com/brewery/fisher-peak-brewing-co/",
  },
  {
    name: "Five Roads Brewing Co",
    url: "https://bccraftbeer.com/brewery/five-roads-brewing-co/",
  },
  {
    name: "Foamers Folly Brewing Co.",
    url: "https://bccraftbeer.com/brewery/foamers-folly-brewing-co/",
  },
  {
    name: "Four Winds Brewing",
    url: "https://bccraftbeer.com/brewery/four-winds-brewing/",
  },
  {
    name: "Fox Mountain Brewing Co",
    url: "https://bccraftbeer.com/brewery/fox-mountain-brewing-co/",
  },
  {
    name: "Fraser Mills Fermentation Company",
    url: "https://bccraftbeer.com/brewery/fraser-mills-fermentation-company/",
  },
  {
    name: "Freddy's Brewpub",
    url: "https://bccraftbeer.com/brewery/freddys-brewpub/",
  },
  {
    name: "Fuggles & Warlock Craftworks",
    url: "https://bccraftbeer.com/brewery/fuggles-warlock/",
  },
  {
    name: "Galaxie Craft Brewhouse",
    url: "https://bccraftbeer.com/brewery/interstellar-brew-house-ltd/",
  },
  {
    name: "Gladstone Brewing",
    url: "https://bccraftbeer.com/brewery/gladstone-brewing/",
  },
  {
    name: "Green Leaf Brewing Co",
    url: "https://bccraftbeer.com/brewery/green-leaf-brewing-co/",
  },
  {
    name: "Hearthstone Brewery",
    url: "https://bccraftbeer.com/brewery/hearthstone-brewery/",
  },
  {
    name: "Herald Street Brew Works",
    url: "https://bccraftbeer.com/brewery/herald-street-brew-works/",
  },
  {
    name: "High Mountain Brewing Company",
    url: "https://bccraftbeer.com/brewery/high-mountain-brewing-company/",
  },
  {
    name: "Highway 97 Brewing Co",
    url: "https://bccraftbeer.com/brewery/highway-97-brewing-co/",
  },
  {
    name: "Home Town Beer Makers",
    url: "https://bccraftbeer.com/brewery/home-town-beer-makers/",
  },
  {
    name: "House of Funk Brewing Co",
    url: "https://bccraftbeer.com/brewery/house-of-funk-brewing-co/",
  },
  {
    name: "Howe Sound Brewing",
    url: "https://bccraftbeer.com/brewery/howe-sound-brewing/",
  },
  {
    name: "Hoyne Brewing Co. Ltd.",
    url: "https://bccraftbeer.com/brewery/hoyne-brewing-co/",
  },
  {
    name: "île Sauvage Brewing Company",
    url: "https://bccraftbeer.com/brewery/ile-sauvage-brewing-company/",
  },
  {
    name: "Iron Road Brewing",
    url: "https://bccraftbeer.com/brewery/iron-road-brewing/",
  },
  {
    name: "Jackknife Brewing",
    url: "https://bccraftbeer.com/brewery/jackkknife-brewing/",
  },
  {
    name: "Kelowna Brewing Company (KBC)",
    url: "https://bccraftbeer.com/brewery/kelowna-brewing-company/",
  },
  {
    name: "Kettle River Brewing Co",
    url: "https://bccraftbeer.com/brewery/kettle-river-brewing-co/",
  },
  {
    name: "Kwantlen Polytechnic University Brewing",
    url:
      "https://bccraftbeer.com/brewery/kwantlen-polytechnic-university-brewing/",
  },
  {
    name: "Lakesider Brewing",
    url: "https://bccraftbeer.com/brewery/lakesider-brewing/",
  },
  {
    name: "Land & Sea Brewing Company",
    url: "https://bccraftbeer.com/brewery/land-sea-brewing-company/",
  },
  {
    name: "Lighthouse Brewery",
    url: "https://bccraftbeer.com/brewery/lighthouse-brewery/",
  },
  {
    name: "Longwood Brewery",
    url: "https://bccraftbeer.com/brewery/longwood-brewing/",
  },
  {
    name: "Longwood Brewpub",
    url: "https://bccraftbeer.com/brewery/longwood-brewpub/",
  },
  {
    name: "LoveShack Libations",
    url: "https://bccraftbeer.com/brewery/loveshack-libations/",
  },
  {
    name: "Main Street Brewing",
    url: "https://bccraftbeer.com/brewery/main-street-brewing/",
  },
  {
    name: "Maple Meadows Brewing",
    url: "https://bccraftbeer.com/brewery/maple-meadows-brewing/",
  },
  {
    name: "Mariner Brewing",
    url: "https://bccraftbeer.com/brewery/mariner-brewing/",
  },
  {
    name: "Marten Brewing Company",
    url: "https://bccraftbeer.com/brewery/marten-brewing-company/",
  },
  {
    name: "Mayne Island Brewing Company",
    url: "https://bccraftbeer.com/brewery/mayne-island-brewing-company/",
  },
  {
    name: "Mighty Peace Brewing Co.",
    url: "https://bccraftbeer.com/brewery/mighty-peace-brewing-co/",
  },
  {
    name: "Monkey 9 Brewing Co",
    url: "https://bccraftbeer.com/brewery/monkey-9-brewing-co/",
  },
  {
    name: "Moody Ales",
    url: "https://bccraftbeer.com/brewery/moody-ales/",
  },
  {
    name: "Moon Under Water Brewery - Pub and Distillery",
    url: "https://bccraftbeer.com/brewery/moon-under-water/",
  },
  {
    name: "Mount Arrowsmith Brewing Co",
    url: "https://bccraftbeer.com/brewery/mount-arrowsmith-brewing-co/",
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
      // console.log(`Data for ${address}`);
      let online = $(this).find("span:contains('Online')").text();
      if (online) {
        let webStore = online.match(/(?:www|https?)[^\s]+/gi);
        if (webStore) {
          console.log(`Web Store ${webStore[0]}`);
        }
      } else {
        // console.log(`no online for ${address}`);
      }
    });
  });
});
