const puppeteer = require('puppeteer');
const readline = require('readline-sync');

console.log('Mensagem no zap');
(async () => {
    const contato = readline.question('Com quem deseja falar? [Nome registrado em seus contatos] ')
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com/');

    await page.waitForSelector(`[title="${contato}"]`);
    // await page.waitForNavigation()
    await page.click(`[title="${contato}"]`);
    await page.type('[title="Mensagem"]', readline.question('Escrever mensagem: '));
    await page.click('span[data-testid="send"]');

    await browser.close();
})();