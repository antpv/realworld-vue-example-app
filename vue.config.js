const path = require('path')

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'translations',
      enableInSFC: false
    }
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
