// nightwatch的配置，读取nightwatch.json，然后动态配置

const path = require('path')

// 读取配置
const baseConfig = require('./nightwatch.json')
const seleniumConfig = require('./config/selenium-conf')

// 配置路径
const rootPath = path.resolve(__dirname)
const driverPath = `${rootPath}/node_modules/selenium-standalone/.selenium`

//phantomjs安装器
// const phantomjs = require('phantomjs-prebuilt')

module.exports = ((settings) => {

    // 设置Selenium-server的位置和版本
    settings.selenium.server_path = `${driverPath}/selenium-server/${seleniumConfig.selenium.version}-server.jar`
 
    // 设置Chrome驱动的位置和版本
    settings.selenium.cli_args['webdriver.chrome.driver'] = `${driverPath}/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`

    // 设置Phantom驱动的位置和版本
    // settings.test_settings.default.desiredCapabilities['phantomjs.binary.path'] = phantomjs.path

    // 设置使用的浏览器
    // let browser = process.argv[2] ? process.argv[2].replace(/-/g, '') : baseConfig.default_browser
    // settings.test_settings.default.desiredCapabilities.browserName = browser

    return settings
})(baseConfig)
