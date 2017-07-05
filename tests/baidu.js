module.exports = {
    '@tags': ['search'],
    // module.exports 导出一个对象，对象的 Key 即为测试用例名称，您可以编写多个测试用例，Nightwatch 将依次执行。
    'Seatch in baidu.': function(client) {
        // client 是代码运行时 Nightwatch 提供的对象，所有对浏览器进行的操作都将使用此对象调取
        // 比如 client.click("CSS Selector")、client.getCookie(function () {...})，可以简单理解为 Selenium 的控制软件
        // http://nightwatchjs.org/api/#commands
        // http://nightwatchjs.org/api/#expect-present

        // 定义 Bing 页面中的节点.
        const searchInput = '#kw'
        const searchBtn = '#su'
        const question = 'nightwatch.js'

        // 启动浏览器并打开 baidu.com.
        client.url('https://www.baidu.com').maximizeWindow()

        // 确保 "body" 和输入框可以使用.
        client.expect.element('body').to.be.present
        client.expect.element(searchInput).to.be.visible
        client.pause(2000) // 稍等两秒.

        // 输入 "nightwatch.js" 然后搜索.
        client.setValue(searchInput, question)
        client.click(searchBtn)
        client.pause(2000)

        // 截一张图然后保存到 "reports/answer.png". 
        client.expect.element('body').to.be.present
        client.saveScreenshot('reports/answers.png')
        client.end()
    }
}
