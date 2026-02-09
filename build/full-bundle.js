// build/full.js（示例文件名）

import { rollup } from "rollup"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import vue from "@vitejs/plugin-vue"
import { nodeResolve } from "@rollup/plugin-node-resolve"

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url)
// 获取当前文件所在目录
const __dirname = dirname(__filename)

export async function buildFullEntry() {
  // rollup 配置
  const bundle = await rollup({
    input: resolve(__dirname, "../src/index.js"),
    plugins: [nodeResolve(), vue()],
    // 排除不进行打包的 npm 包，例如 Vue，以便减少包的体积
    external: ["vue"]
  })

  // 输出配置
  await bundle.write({
    format: "umd",
    file: resolve(__dirname, "../dist/index.full.js"),
    name: "directivesExpand",
    exports: "named",
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: "Vue"
    }
  })
}
