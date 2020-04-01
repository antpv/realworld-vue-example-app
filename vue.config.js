const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/realworld-vue-example-app/' : '/',

  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'translations',
      enableInSFC: false
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_configurations.scss";`
      }
    }
  }
}
