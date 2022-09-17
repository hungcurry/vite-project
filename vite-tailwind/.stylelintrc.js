// .stylelintrc.js
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  plugins: [
    'stylelint-order'
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'max-nesting-depth': null,
    'max-line-length': null,
    'selector-max-compound-selectors': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-no-qualifying-type': null,
    'selector-class-pattern': null,
    'function-parentheses-newline-inside': null,
    'at-rule-no-unknown': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'scss/no-global-function-names': null,
    'scss/comment-no-empty': null,
    'scss/at-extend-no-missing-placeholder': null , // extend %取消
    'function-name-case': null, // 取消駝峰式
    'scss/at-function-pattern': null, // 取消駝峰式
    'scss/at-mixin-pattern': null,// 取消駝峰式
    'at-rule-empty-line-before': null, // Mix include前不空行
    'order/properties-order': [
      'content',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'flex-wrap',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-justify',
      'text-align',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}