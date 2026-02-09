import { sidebar } from "./sidebar" // 确保路径正确
import { resolve } from "path"
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin"
const socialLinks = [{ icon: "github", link: "https://github.com/jiayc4215/directives-expand" }]
import { defineConfig } from "vitepress"
export default defineConfig({
  // 部署路径 注意： 部署到github pages 时，需要将 base 设置为 仓库名
  base: "/directives-expand/",
  lang: "zh-CN",
  lastUpdated: true, //显示最后更新时间
  ignoreDeadLinks: true, //忽略死链
  themeConfig: {
    logo: "/logo.png",
    sidebar
  },
  // markdown 配置
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark"
    },
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  // 多语言配置
  locales: {
    // 这里的 root 代表默认语言（无前缀）
    root: {
      lang: "zh-CN",

      title: "directives-expand",
      description: "Vue3 指令扩展库",
      label: "简体中文",
      //主题配置
      themeConfig: {
        nav: [
          { text: "指南", link: "/guide/", activeMatch: "^/guide/" },
          {
            text: "指令",
            link: "/directives/v-copy",
            activeMatch: "^/directives/"
          },
          { text: "交流群", link: "/contact-me", activeMatch: "^/contact-me" }
        ],
        // 社交链接
        socialLinks: [
          {
            icon: {
              svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1"></path></svg>'
            },
            link: "https://www.douyin.com/user/MS4wLjABAAAA0-8Y13O22cp4uPQ9rr_128pB28ioDjWLWRdGK4gVtxw"
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 1049 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M363.822 162.086l-96.96-93.983S251.714 49.46 277.346 28.36c25.76-20.972 27.056-11.651 35.73-5.826 8.672 5.826 144.21 139.551 144.21 139.551h-93.464z m322.08 3.496l96.962-93.984s15.146-18.641-10.486-39.742c-25.632-20.972-27.056-11.651-35.73-5.826-8.672 5.826-144.211 139.552-144.211 139.552h93.466z" ></path><path d="M1049.798 339.568c-3.495-147.19-131.396-175.152-131.396-175.152s-655.295-5.307-791.998 0C-10.3 202.994 0.186 339.568 0.186 339.568s1.813 292.565-0.13 440.66c14.759 148.096 128.938 171.656 128.938 171.656s45.567 0.906 78.837 0.906c3.495 9.58 6.084 56.054 57.866 56.054 51.652 0 57.866-56.054 57.866-56.054s378.523-1.812 409.98-1.812c1.812 15.793 9.58 58.643 61.36 57.866 51.653-0.906 55.149-61.361 55.149-61.361s17.476-1.813 70.034 0c122.593-22.784 129.713-166.478 129.713-166.478s-1.683-294.248 0-441.437zM944.292 808.06c0 23.172-18.382 42.072-41.037 42.072H157.214c-22.655 0-41.037-18.77-41.037-42.072V313.936c0-23.173 18.382-42.073 41.037-42.073h746.042c22.655 0 41.037 18.771 41.037 42.073V808.06z" ></path><path d="M194.755 453.487l219.037-42.073 16.57 82.333-217.223 42.073z m681.575 0l-219.036-42.073-16.7 82.333 217.353 42.073zM430.36 657.636s48.158 86.734 101.623-28.092c51.652 112.107 108.61 29.774 108.61 29.774l32.365 21.101s-60.455 97.22-140.2 23.69c-67.444 73.53-138.385-23.43-138.385-23.43l35.988-23.043z" ></path></svg>'
            },
            link: "https://space.bilibili.com/1525537842"
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M1003.52 430.08c-12.288-143.36-118.784-253.952-258.048-262.144-118.784-6.144-245.76 0-360.448 0-143.36 0-266.24 114.688-266.24 258.048 0 81.92 0 163.84 0 245.76 0 143.36 122.88 258.048 266.24 258.048 114.688 0 245.76 6.144 360.448 0 143.36-8.192 245.76-118.784 258.048-262.144 4.096-90.112 4.096-188.416 0-279.648zM573.44 696.32c-110.592 0-200.704-90.112-200.704-200.704s90.112-200.704 200.704-200.704c73.728 0 143.36 40.96 176.128 106.496l-73.728 36.864c-20.48-36.864-57.344-61.44-102.4-61.44-65.536 0-118.784 53.248-118.784 118.784s53.248 118.784 118.784 118.784c45.056 0 81.92-24.576 102.4-61.44l73.728 36.864c-32.768 65.536-102.4 106.496-176.128 106.496z" fill="#FC5531"></path></svg>'
            },
            link: "https://blog.csdn.net/qq_63358859"
          },
          ...socialLinks
        ]
      }
    },
    // 这里的 en 代表英语（路径带 /en/）
    en: {
      lang: "en-US",
      title: "directives-expand",
      description: "Custom Vue3 directives library",
      label: "English",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/en/guide/" },
          { text: "Directives", link: "/en/directives/v-copy" }
        ],
        socialLinks: [...socialLinks]
      }
    }
  },
  vite: {
    server: {
      port: 8090
    },

    resolve: {
      resolve: {
        alias: {
          "directives-expand": resolve("../../src/")
        }
      }
    }
  },
  //  为了解决打包后，控制台不结束
  buildEnd() {
    setTimeout(() => {
      process.exit(0)
    }, 2000)
  }
})
