// 动态配置nightwatch，可以通过cmd选择测试的打开方式

const path = require('path')
const phantomjs = require('phantomjs-prebuilt')

const baseConfig = require('./nightwatch.json')
const seleniumConfig = require('./build/selenium-conf')

// 配置路径
const rootPath = path.resolve(__dirname)
const driverPath = `${rootPath}/node_modules/selenium-standalone/.selenium`

module.exports = ((settings) => {
    // 监听进程参数
    let browser = process.argv[2] ? process.argv[2].replace(/-/g, '') : baseConfig.default_browser
    // console.log(browser)

    // 告诉 Nightwatch 我的 Selenium 在哪里。
    settings.selenium.server_path = `${driverPath}/selenium-server/${seleniumConfig.selenium.version}-server.jar`

    // 设置 Chrome Driver, 让 Selenium 有打开 Chrome 浏览器的能力。
    settings.selenium.cli_args['webdriver.chrome.driver'] = `${driverPath}/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`

    // 设置Phantom Driver, 可以不用打开浏览器就进行测试
    settings.test_settings.default.desiredCapabilities['phantomjs.binary.path'] = phantomjs.path

    // 设置使用的浏览器
    settings.test_settings.default.desiredCapabilities.browserName = browser

    return settings
})(baseConfig)
