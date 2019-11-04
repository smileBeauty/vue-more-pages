
const glob = require('glob')
const titles = require('./templateTitle')

let pages = {}

glob.sync('./src/pages/**/main.js').forEach(filePath => {
  const chunk = filePath.split('./src/pages/')[1].split('/main.js')[0]
  pages[chunk] = {
    entry: filePath,
    template: filePath.replace('main.js', 'index.html'),
    filename: chunk + '.html',
    title: titles[chunk]
  }
})

module.exports = {
  pages: pages,
  publicPath: './',
  devServer: {
    open: true,
    index: '/fontend.html'    //  默认启动页面
  }
}