module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-console': 1,
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4
            }
        ]
    }
};
