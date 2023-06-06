const {createProxyMiddleware} = require('http-proxy-middleware');



module.exports = (app) => {
    app.use(
        createProxyMiddleware(
          '/api',{
            target: 'http://localhost:8086', /* /api 요청 시 서버 URL 설정 58085*/
            secure: false,
            changeOrigin: true, /*  */
            pathRewrite: {  /* api -> '' 빈값으로 치환 */
                '^/api': ''
              }
        }),
    );
}