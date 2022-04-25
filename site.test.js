const timeout = 15000; 
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

