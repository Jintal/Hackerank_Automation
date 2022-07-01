const puppeteer = require('puppeteer');
const solArr = require('./solution.js');
const username = 'jicapa5648@petloca.com';
const password = '2278457245';
const loginLink = 'https://www.hackerrank.com/auth/login';

async function solveProblems() {
    try {

        const browserObj = await puppeteer.launch({
            headless : false,
            slowMo : true,
            defaultViewport : null,
            args : ["--start-maximized"]
        });
        
        const currTab = await browserObj.newPage();
    
        await currTab.goto(loginLink);
        await currTab.waitForSelector('#input-1', {visible : true});
        await currTab.type('#input-1', username, {delay : 50});
        await currTab.waitForSelector('#input-2', {visible : true});
        await currTab.type('#input-2', password, {delay : 50});
        
        await currTab.keyboard.press('Enter');

        await currTab.waitForSelector('a[data-attr1="algorithms"]', {visible : true});
        await currTab.click('a[data-attr1="algorithms"]', {delay : 50});
        
        await currTab.waitFor(3000);

        await currTab.waitForSelector('input[value="warmup"]', {visible : true});
        await currTab.click('input[value="warmup"]', {delay : 50});
        
        await currTab.waitFor(3000);

        await currTab.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-styled', {visible : true}); // Can give problem
        const arrOfProblems = await currTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-styled')
        
        await arrOfProblems[1].click({delay : 50});
    
        await currTab.waitForSelector('.monaco-editor.no-user-select.vs', {visible : true});
        await currTab.click('.monaco-editor.no-user-select.vs', {delay : 50});
    
        await currTab.waitForSelector('.checkbox-input', {visible : true});
        await currTab.click('.checkbox-input', {delay : 50});
    
        await currTab.waitForSelector('#input-1', {visible : true});
        await currTab.click('#input-1', {delay : 50});
    
        await currTab.type('#input-1', solArr[0], {delay : 50});
        await currTab.keyboard.down('Control');
        await currTab.keyboard.press('A');
        await currTab.keyboard.press('X');
        await currTab.keyboard.up('Control');
    
        await currTab.waitForSelector('.monaco-editor.no-user-select.vs', {visible : true});
        await currTab.click('.monaco-editor.no-user-select.vs', {delay : 2000});
    
        await currTab.keyboard.down('Control');
        await currTab.keyboard.press('A');
        await currTab.keyboard.press('V');
        await currTab.keyboard.up('Control');
        
        await currTab.waitForSelector('.hr-monaco-submit', {visible : true});
        await currTab.click('.hr-monaco-submit', {delay : 1000});
        
    } catch (error) {
        console.log(error);
    }
};

solveProblems();

