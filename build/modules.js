import { rollup } from "rollup"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import vue from "@vitejs/plugin-vue"

import glob from "fast-glob"
import { fileURLToPath } from "url"
import { resolve, dirname } from "path"

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url)
// 获取当前文件所在目录
const __dirname = dirname(__filename)

const projectRoot = resolve(__dirname, "..")
const pkgRoot = resolve(projectRoot, "src")
const epOutput = resolve(projectRoot, "dist")

// 模块化打包任务函数
export const buildModules = async () => {
  const input = await glob("**/*.{js,ts,vue}", {
    cwd: pkgRoot,
    absolute: true, // 返回绝对路径
    onlyFiles: true // 只返回文件的路径
  })

  const bundle = await rollup({
    input, // 配置入口文件
    plugins: [
      // 配置插件
      vue(),
      nodeResolve()
    ]
  })

  // 配置输出文件格式
  await bundle.write({
    format: "esm", // 配置输出格式
    dir: resolve(epOutput, "es"), // 配置输出目录
    exports: "named", // 使用具名导出，避免混合导出警告
    preserveModules: true, // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk
    entryFileNames: `[name].mjs` // [name]：入口文件的文件名（不包含扩展名），也就是生产 .mjs 结尾的文件
  })

  await bundle.write({
    format: "cjs", // 配置输出格式
    dir: resolve(epOutput, "lib"), // 配置输出目录
    exports: "named", // 使用具名导出，避免混合导出警告
    preserveModules: true, // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk
    entryFileNames: `[name].js` // [name]：入口文件的文件名（不包含扩展名），也就是生产 .js 结尾的文件
  })
}
