module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': 'tsconfig.json',
    'sourceType': 'module',
    'createDefaultProgram': true
  },
  'plugins': [
    'eslint-plugin-no-null',
    'eslint-plugin-jsdoc',
    '@typescript-eslint',
    'react-hooks'
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true
      }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    '@typescript-eslint/semi': [
      'error',
      'never'
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs'
    ],
    'comma-dangle': 'error',
    'curly': 'off',
    'default-case': 'error',
    'eol-last': 'off',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'off',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'off',
    'jsdoc/check-alignment': 'off',
    'jsdoc/check-indentation': 'off',
    'jsdoc/newline-after-description': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        'allow': [
          'log',
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-null/no-null': 'off',
    'no-redeclare': 'error',
    'no-shadow': [
      'off',
      {
        'hoist': 'all'
      }
    ],
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'radix': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        'markers': [
          '/'
        ]
      }
    ]
  }
}
