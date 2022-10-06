module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript'], // 'airbnb'
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'import'],
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    semi: 'off',
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': 'off'
  }
}
