// .eslintrc.js
const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;

module.exports = {
  "extends": "airbnb",

  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },

  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
    "browser": true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }
    }
  },
  
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
        "parserOptions": {
          "jsx": true,
        }
      },
      plugins: [ 
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
      ],
      rules: Object.assign(typescriptEslintRecommended.rules, {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/jsx-filename-extension': [
          1, 
          { 
            'extensions': ['.jsx', '.tsx'] 
          }
        ],
        'import/no-unresolved': 'off',
        'react-hooks/rules-of/hooks': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/prefer-stateless-function': 'error',
        'import/extensions': [0, '.js', '.jsx', '.json', '.ts', '.tsx']
      })
    }
  ],
};
