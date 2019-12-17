module.exports = {
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module'
    },
    env: {
        node: true,
        es6: true
    },
    globals: {},
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    rules: {
        'no-console': ['off', 'all'],
        'no-var': 'error'
    }
}
