const fs = require('fs')
const config = JSON.parse(fs.readFileSync('package.json'))
const path = require('path');
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-app-cli',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  chainWebpack(config, { webpack }) {
    if(process.env.NODE_ENV === 'production'){
      config
      .output
        .filename('static/js/[name].[chunkhash].js')
        .chunkFilename('static/js/[name].[chunkhash].js')
      .end()
      
      .plugin('extract-css')
        .use(
          require('mini-css-extract-plugin'), [
            {
              filename: `static/css/[name].[contenthash:8].css`,
              chunkFilename: `static/css/[name].[contenthash:8].chunk.css`,
            },
          ]
        )
        .end()

      .module
        .rule('exclude')
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 10000,
          name: 'static/images/[name].[hash:8].[ext]'
        })
        .end()
    config.module.rule('sass')
        .use('extract-css-loader')
        .loader(require('mini-css-extract-plugin').loader)
        .options({
          publicPath: '../../'
        })
        .before('css-loader')
    }
  },
  history: 'hash',
  publicPath: process.env.BUILD_ENV === 'production' ? `//s1.mljr.com/${process.env.npm_package_name}/` : './',
  outputPath: `./dist/${config.name}`,
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/member": {
      "target": "http://192.168.50.176:9527/",
      "changeOrigin": true
    }
  },
  alias: {
    "config" : path.resolve(__dirname, './src/utils/config.js'),
    "@":  path.resolve(__dirname, './src')
  },
  define: {
    "process.env": {},
    "process.env.NODE_ENV": process.env.NODE_ENV,
    "process.env.BUILD_ENV": process.env.BUILD_ENV,
    "process.env.BROWSER": process.env.BROWSER,
    "process.env.PROJECT_NAME": process.env.PWD.split('/').pop(),
  }
}
