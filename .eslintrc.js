module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/essential',
        'google',
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {}
}
