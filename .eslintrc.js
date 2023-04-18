module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'es6': true
  },
  'plugins': ['@html-eslint'],
  'overrides': [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended', 'prettier'],
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'quotes': [2, 'single', { 'avoidEscape': true }]
  }
}
