require('dotenv').config();

const cheerio = require('cheerio');
const superagent = require('superagent');
const _ = require('lodash');
const session = process.env.SESSION;

async function fetch(year) {
  try {
    const res = await superagent.get(`https://adventofcode.com/${year}`)
          .set('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36')
          .set('Cookie', `session=${session}`);
    const html = res.text;
    const $ = cheerio.load(html);
    return parseInt($('.star-count').text().replace('*', '')) || 0;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

module.exports = async (req, res) => {
  const currentYear = new Date().getFullYear();
  const years = _.range(2015, currentYear + 1);
  const stars = await Promise.all(_.map(years, year => fetch(year)));
  const allStars = stars.reduce((acc, star) => acc + star);
  console.log(allStars);
  res.json({
    allStars: `${allStars}*`,
  });
};
