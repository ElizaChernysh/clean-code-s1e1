module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'es6': true
  },
  'plugins': ['@html-eslint', 'css'],
  'overrides': [
    {
      files: ['*.html', ],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended', 'prettier'],
    },
    {
      files: ['*.css'],
      extends: ["stylelint-config-standard"],
      rules: {
        "css/color-hex-case": ["error", "lower"]
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    // 'quotes': [2, 'single', { 'avoidEscape': true }],
    "css/number-leading-zero": ["error",
      "always"],
    "css/color-hex-style": ["error",
      "RGB", // "RRGGBB"
    ]
  }
}
