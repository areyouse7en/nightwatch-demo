// 手动启动selenium的方法，可以用来测试server是否可以启动

const selenium = require('selenium-standalone')
const seleniumConfig = require('./selenium-conf')

selenium.start({
    drivers: seleniumConfig.driver
}, (err, child) => {
    if (err) {
        console.error(`Selenium 启动失败: ${err}`)
    }

    console.log(`Selenium 已手工启动，进程 PID: ${child.pid}`)
    console.log('当不再需要运行 Selenium 时可关闭此 PID 进程.')
})
