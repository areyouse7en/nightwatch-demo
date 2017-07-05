module.exports = {
    // Selenium 的版本配置信息。可在下方链接查询最新版本。
    // https://selenium-release.storage.googleapis.com/index.html
    selenium: {
        version: '3.4.0',
        baseURL: 'https://selenium-release.storage.googleapis.com'
    },

    // Driver 用来启动系统中安装的浏览器，Selenium 默认使用 Firefox，如果不需要使用其他浏览器，则不需要额外安装 Driver。
    // 在此我们安装 Chrome 的 driver 以便使用 Chrome 进行测试。
    driver: {
        chrome: {
            // Chrome 浏览器启动 Driver，可在下方链接查询最新版本。
            // https://chromedriver.storage.googleapis.com/index.html
            // 这里有个坑，他的版本号是个位数往上加的，首先要对应自己chrome的版本，如59.0.3071.86，那driver的版本就是2.30
            // https://chromedriver.storage.googleapis.com/2.30/notes.txt
            version: '2.30',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com'
        }
    }
}
