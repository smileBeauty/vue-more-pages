module.exports = {
  pages: {
    fontend: {
      entry: 'src/pages/fontend/main.js',
      template: 'src/pages/fontend/index.html',
      // 模板编译后输出的名字 去掉后与template的文件名相同
      filename: 'fontend.html',
      title: '前台',
      icon: 'src/pages/fontend/favicon.ico'
      // chunks: ['console']
    },
    admin: {
      entry: 'src/pages/admin/main.js',
      template: 'src/pages/admin/index.html',
      filename: 'admin.html',
      title: '后台',
      icon: 'src/pages/admin/favicon.ico'
    }
  }
}