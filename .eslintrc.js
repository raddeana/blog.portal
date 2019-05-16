/**
 * Eslint 配置
 * @author Philip
 */
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  rules: {
    "quotes": [1, "double"],
    "indent": ["error", 4],
    "generator-star-spacing": "off",
    "no-trailing-spaces": "off",
    "no-debugger": process.env.NODE_ENV === ' production' ? 'error' : 'off'
  }
}
