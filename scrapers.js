const puppeteer = require ('puppeteer');
async function scrapeProduct(url){

        const browser =await puppeteer.launch();
        const page =await browser.newPage();
        await page.goto(url)

        const [el] = await page.$x('/html/body/div/div[1]/div/div[1]/div/article[1]/div/div[2]');
        const txt = await el.getProperty('textContent');
        const rawTxt =await txt.jsonValue();

        console.log(rawTxt);
        browser.close();
}

scrapeProduct('https://cuinetesperlalaia.wordpress.com/');
