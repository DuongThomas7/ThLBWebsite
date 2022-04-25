const timeout = 15000; 
const puppeteer = require('puppeteer');

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
}); 

describe('Test page title and header', () => { 
    test('page title', async () => { 
        const title = await page.title(); 
        expect(title).toBe('Theta Lambda Beta'); 
    }, timeout);
    
    test('Header', async () => {
        const headerOne = await page.$('.hero-heading'); 
        const header = await page.evaluate(headerOne => headerOne.innerHTML, headerOne); 
        expect(header).toBe("Theta Lambda Beta"); 
    }, timeout);
});

describe('Test URL', () => {
    test('Url', async () => {
        const url = await page.url();
        expect(url).toBe("https://thetalambdabeta.com/")
    })
})

describe('Test text is loaded', () => {
    test('Website should load without error', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('Theta Lambda Beta');
    });
})