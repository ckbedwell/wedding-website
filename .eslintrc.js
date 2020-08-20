module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  plugins: ['react-hooks'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    camelcase: [0],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['error', {
      allow: ['warn', 'error'],
    }],
    // 'no-unused-vars': [0],
    // 'no-var': [0],
    // 'no-undef': [0],
    // 'no-useless-constructor': [0],
    'space-before-function-paren': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'no-useless-escape': [0],
    'prefer-promise-reject-errors': [0],
    'prefer-const': [0],
    'no-return-assign': [0],
    'react-hooks/rules-of-hooks': [2],
    'react-hooks/exhaustive-deps': [0],
    'no-shadow': [2],
    'standard/no-callback-literal': [0],
    // 'react/jsx-uses-vars': ['error'],
    'react/jsx-uses-react': ['error'],
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens-new-line',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    indent: [2, 2],
    'react/jsx-sort-props': [2],
    'react/jsx-closing-bracket-location': [
      2,
    ],
    semi: [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [
      2,
      {
        when: 'always',
      },
    ],
    'react/jsx-one-expression-per-line': [
      2,
      {
        allow: 'literal',
      },
    ],
    'react/react-in-jsx-scope': [0],
    'react/prop-types': [0],
    'react/self-closing-comp': ['error', {
      component: true,
      html: true,
    }],
  },
}
