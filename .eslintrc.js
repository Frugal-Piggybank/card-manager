module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
  ],
  rules: {
    // '@typescript-eslint/no-empty-function': 'off',
    curly: 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars-experimental': 'error',
    // '@typescript-eslint/no-use-before-define': 'off',
    // 'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
    // 'react-native/no-inline-styles': 'off'
  },
};
