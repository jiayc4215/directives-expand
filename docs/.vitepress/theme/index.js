import DefaultTheme from "vitepress/theme"
import { ElementPlusContainer } from "@vitepress-demo-preview/component"
import "@vitepress-demo-preview/component/dist/style.css"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

export default {
  extends: DefaultTheme, // 继承默认主题
  enhanceApp: async ({ app }) => {
    // 注册图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    // 注册 demo-preview 组件
    app.component("demo-preview", ElementPlusContainer)

    // 注册 ElementPlus
    app.use(ElementPlus)
  }
}
