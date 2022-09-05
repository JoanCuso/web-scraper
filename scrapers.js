const puppeteer = require ('puppeteer');
async function scrapeProduct(url){

        const browser =await puppeteer.launch();
        const page =await browser.newPage();
        await page.goto(url)

        const [el] = await page.$x('/html/body/div/div[1]/div/div[1]/div/article[1]/div/div[2]'); //inspct web i copy XPath
        const txt = await el.getProperty('textContent');  //different if text or image 
        const rawTxt =await txt.jsonValue(); ////different if text or image 

        console.log(rawTxt);
        browser.close();
}

scrapeProduct('https://cuinetesperlalaia.wordpress.com/');
