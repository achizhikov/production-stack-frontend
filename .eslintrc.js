module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended'
  ], // 'airbnb'
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'import', 'i18next', '@typescript-eslint'],
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    semi: 'off',
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': 'off',
    'i18next/no-literal-string': [2, { markupOnly: true }]
  }
}
