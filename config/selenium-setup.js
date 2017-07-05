// 安装启动需要的driver的jar包

const selenium = require('selenium-standalone')
const seleniumConfig = require('./selenium-conf')
const ora = require('ora')

// ora只是cmd中显示动画用的
const spinner = ora('安装中...').start()

selenium.install({
    version: seleniumConfig.selenium.version,
    baseURL: seleniumConfig.selenium.baseURL,
    drivers: seleniumConfig.driver,
    logger: function(message) { console.log(message) },
    progressCb: function(totalLength, progressLength, chunkLength) {}
}, function(err) {
    if (err) {
        console.error(`Selenium 安装错误: ${err}`)
        spinner.fail()
        process.exit(1)
    }

    spinner.succeed()
    console.log('Selenium 安装完成.')
    process.exit(0)
})
