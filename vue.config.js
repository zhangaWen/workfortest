const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname,dir)
}
module.exports = {
  //选项---编写webpack配置
  configureWebpack: {
    resolve: {
      extensions: ['.js','.vue','.json'],   //自动添加文件扩展名
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''// rewrite path
        },
      },
      '/foo': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/baidu': '' // rewrite path
        },
      }
    }
  }
}