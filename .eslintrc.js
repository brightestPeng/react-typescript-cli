const OFF = 'off';
const ERROR = 'error';

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        // import 模块时，不写后缀将尝试导入的后缀，出现频率高的文件类型放前面
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],

    '@typescript-eslint/no-use-before-define': ERROR,
    '@typescript-eslint/no-useless-constructor': ERROR,
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],

    'lines-between-class-members': OFF,
    'no-console': OFF,
    'no-unused-expressions': OFF,
    'no-use-before-define': OFF,
    'no-useless-constructor': OFF,
  },
  overrides: [
    {
      files: ['scripts/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': OFF,
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-duplicates': OFF,
        'no-unused-vars': OFF,
        '@typescript-eslint/no-useless-constructor': OFF,
      },
    },
  ],
};
