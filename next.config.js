const path = require('path')

module.exports = {
    webpack5:false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    reactStrictMode: true,
    webpack: config => {
      config.module.rules.push({
        test: /\.wasm$/,
        loaders: ['wasm-loader'],
        type:  "javascript/auto",
      })
      return config
    },
}