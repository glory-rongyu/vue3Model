module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true
    },
    extends: ['plugin:vue/essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'vue/no-multiple-template-root': 'off',
        'import/prefer-default-export': 'off'
    }
}
