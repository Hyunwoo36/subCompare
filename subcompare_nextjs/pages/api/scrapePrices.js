import axios from 'axios';
import cheerio from 'cheerio';

const puppeteer = require("puppeteer");

// click next from the first netflix page to get to price
export default async (req, res) => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // navigate to netflix price showing page
        await page.goto('https://www.cabletv.com/netflix');

        // extract prices
        const prices = await page.$$eval('tbody tr td:nth-child(2)', elements => {
            return elements.map(el => parseFloat(el.innerText.replace('$', '').replace('/mo.', '').trim()));
        });
        await browser.close();
        const netflixPrices = prices.slice(0, 3);

        console.log("Netflix prices: ", netflixPrices);

        netflixPrices.sort((a, b) => a - b);

        const lowestPrice = netflixPrices[0];
        const otherPrices = netflixPrices.slice(1);

        res.status(200).json({
            lowestPrice,
            otherPrices
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to scrape Netflix1" });
    }
};