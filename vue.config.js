module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? ''
    //     : '/',

    devServer: {
        port: 8180,
        proxy: {
            '/api': {
                target: 'http://192.168.1.235:9030',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            },
            '/search_api': {
                target: 'http://192.168.1.235:9100',
                pathRewrite: {
                    '^/search_api': ''
                },
                changeOrigin: true
            },
            '/shopcar_api': {
                target: 'http://192.168.1.235:9040',
                pathRewrite: {
                    '^/shopcar_api': ''
                },
                changeOrigin: true
            },
            "/payment_api": {
                target: 'http://192.168.1.235:9111',
                pathRewrite: {
                    '^/payment_api': ''
                },
                changeOrigin: true
            },
            "/sxt": {
                target: 'http://192.168.1.235:3001',
                pathRewrite: {
                    '^/sxt': ''
                },
                changeOrigin: true
            },
            "/register_api": {
                target: 'http://192.168.1.235:9090',
                pathRewrite: {
                    '^/register_api': ''
                },
                changeOrigin: true
            }
        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
}