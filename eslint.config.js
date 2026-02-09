import js from "@eslint/js" //js规范（标准的）
import globals from "globals" //环境
import pluginVue from "eslint-plugin-vue" //vue规范
import { defineConfig } from "eslint/config" //配置
import pluginCypress from "eslint-plugin-cypress"
import eslintConfigPrettier from "eslint-config-prettier" // prettier
const ignores = ["**/dist/**", "**/node_modules/**", ".*", "**/.docs/**", "**/docs/.vitepress/**"]
export default defineConfig([
  // 1. 全局忽略
  {
    ignores
  },
  // 2. 继承各个插件的推荐配置 (它们是独立的配置对象)
  pluginVue.configs["flat/essential"], //vue规范
  pluginCypress.configs.recommended, //cypress规范

  // 3. 自定义全局设置
  {
    files: ["**/*.{js,mjs,cjs,vue}"], //匹配文件
    plugins: { js },
    extends: ["js/recommended"], //js规范

    //全局变量 window
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        uni: true
      }
    },
    ...eslintConfigPrettier,
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": ["error", { varsIgnorePattern: "^v[A-Z]" }],
      "no-useless-assignment": "off"
    }
  }
])
