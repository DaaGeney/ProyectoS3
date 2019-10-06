const {Builder, By, Key, until} = require("selenium-webdriver")

async function test(){
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get("http://localhost:8080/registrarusuario")
    await driver.findElement(By.xpath('//*[@id="input-2"]')).sendKeys("Jose")
    await driver.findElement(By.xpath('//*[@id="input-2"]')).sendKeys("tamayo")
    await driver.findElement(By.xpath('//*[@id="input-2"]')).sendKeys("bad guy")
    await driver.findElement(By.xpath('//*[@id="input-5"]')).sendKeys("453243")
    await driver.findElement(By.xpath('//*[@id="input-1"]')).sendKeys("tamayobby@gmail.com")
    await driver.findElement(By.xpath('//*[@id="input-6"]')).sendKeys("12345678")

    await driver.findElement(By.xpath('//*[@id="app"]/form/button[1]')).click()
}

test()