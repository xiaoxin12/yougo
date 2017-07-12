var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var proxy = require('http-proxy-middleware');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {'/api': {target: 'http://10.2.153.179/thinkphp/public/', changeOrigin: true},
  '/data': {target: 'https://heweijie.me', changeOrigin: true},
  '/h51701/api': {target: 'http://10.2.153.17/', changeOrigin: true}}
})
