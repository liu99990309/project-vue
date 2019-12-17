module.exports = function (api) {
    // 版本检测
    api.assertVersion('^7')
    api.cache(true)
    return {
        plugins: ['@babel/syntax-dynamic-import'],
        presets: [
            [
                '@babel/env',
                {
                    // corejs版本指定
                    corejs: 2,
                    // polyfill
                    useBuiltIns: 'usage',
                    modules: false
                }
            ]
        ]
    }
}
