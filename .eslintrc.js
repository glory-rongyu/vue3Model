module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/essential',
        'plugin:import/recommended', // ***1.解决引入问题
        'airbnb-base',
        'plugin:prettier/recommended'
    ],
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
            }
            // alias: {
            //     map: [['@', './src']],
            //     extensions: ['.js', '.jsx'] // ***2.解决引入问题
            // }
        }
    },
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'vue/no-multiple-template-root': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'vue/multi-word-component-names': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'no-shadow': 'off'
    }
}
