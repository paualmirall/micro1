module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://paualmirallmicro1.netlify.com/'
      : '/',
    chainWebpack: config => {
      config.externals({
        'lodash': {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          amd: 'lodash',
          root: '_',
        },
      })
    }
  }