module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  settings: {
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      'vite-plugin-eslint',
    ],
  },
  rules: {
    // 這邊可以自訂規則
  },
};
