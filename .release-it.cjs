module.exports = {
  $schema: "https://unpkg.com/release-it@17/schema/release-it.json",

  git: {
    commitMessage: "chore: release v${version}", //要添加到提交步骤中的消息
    push: true //是否自动推送
  },
  npm: {
    publish: true //是否自动发布
  },
  github: {
    release: true, //是否自动创建release
    web: true, //显式覆盖检查是否GITHUB_TOKEN已设置
    autoGenerate: true //是否自动生成release
  },
  hooks: {
    "before:init": ["npm run lint"], // 在初始化之前运行
    "after:bump": "npm run build", // 在版本号增加之后运行
    "after:git:release": "echo After git push, before github release", // 在git push之后运行
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}." // 在release之后运行
  }
}
