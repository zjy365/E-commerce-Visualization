module.exports = {
  //lintOnSave: false,
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module'
  },
  parser: "vue-eslint-parser",
  extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential',
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      // 'standard'
  ],
  // required to lint *.vue files
  plugins: [
      'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren' : 0,
    'no-trailing-spaces' : 0,
    'eol-last' : 0,
    'vue/no-unused-vars' : 0,
    'no-console': 'off',
  }

}