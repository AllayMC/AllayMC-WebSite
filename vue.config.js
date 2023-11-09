const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    'style-resources-loader': {//添加预处理SASS的插件,用于将SASS编译成CSS
      preProcessor: 'sass',
      patterns: []
    }
  }
})
