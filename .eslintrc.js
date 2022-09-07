module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
    {
      files: ['src/store.js'],
      rules: {
        'no-param-reassign': 0,
        'import/no-dynamic-require': 0,
        'global-require': 0,
      },

    },
  ],
  ignorePatterns: [
    'node_modules',
    'dist/',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
