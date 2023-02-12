const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://loclhost:7001', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      }, 
      headers: {
        "Connection": "keep-alive"
      }
    })
  );
}