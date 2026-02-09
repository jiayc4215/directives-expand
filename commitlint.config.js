import { defineConfig } from "cz-git"

export default defineConfig({
  // 继承 commitlint 的 conventional 规范
  // 约束最终生成的 commit message 格式
  extends: ["@commitlint/config-conventional"],

  // commitlint 校验规则（可按需补充）
  rules: {
    // @see https://commitlint.js.org/#/reference-rules
  },

  // cz-git 交互式提交配置
  prompt: {
    // 快捷别名：输入 fd 等价于 docs: fix typos
    alias: {
      fd: "docs: fix typos"
    },

    // 交互过程中的提示文案
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联 issue 前缀（可选）:",
      customFooterPrefix: "输入自定义 issue 前缀 :",
      footer: "列举关联 issue（可选）例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改 commit ?"
    },

    // 提交类型（type）列表
    // 会作为第一步选择项
    types: [
      { value: "feat", name: "feat:     新增功能 | A new feature" },
      { value: "fix", name: "fix:      修复缺陷 | A bug fix" },
      {
        value: "docs",
        name: "docs:     文档更新 | Documentation only changes"
      },
      { value: "style", name: "style:    代码格式 | 不影响逻辑的样式调整" },
      { value: "refactor", name: "refactor: 代码重构 | 既不是修复也不是新增" },
      { value: "perf", name: "perf:     性能提升 | 提升性能的代码修改" },
      { value: "test", name: "test:     测试相关 | 测试用例新增或修复" },
      { value: "build", name: "build:    构建相关 | 构建系统或依赖变更" },
      { value: "ci", name: "ci:       持续集成 | CI 配置或脚本修改" },
      { value: "revert", name: "revert:   回退代码 | 回滚某次提交" },
      { value: "chore", name: "chore:    其他修改 | 非 src / test 变更" }
    ],

    // 是否在 commit message 中使用 emoji
    useEmoji: false,

    // emoji 对齐方式（启用 emoji 时生效）
    emojiAlign: "center",

    // 是否启用 AI 自动生成 commit 描述
    useAI: false,

    // AI 生成候选数量
    aiNumber: 1,

    // 主题色（用于终端高亮）
    themeColorCode: "",

    // 预定义的 scope 列表（为空表示不限制）
    scopes: [],

    // 是否允许自定义 scope
    allowCustomScopes: true,

    // 是否允许 scope 为空
    allowEmptyScopes: true,

    // 自定义 scope 选项在列表中的位置
    customScopesAlign: "bottom",

    // 自定义 scope 的别名
    customScopesAlias: "自定义",

    // 空 scope 的别名
    emptyScopesAlias: "空",

    // subject 是否强制首字母大写（null 表示不限制）
    upperCaseSubject: null,

    // 是否强制询问 breaking change
    markBreakingChangeMode: false,

    // 哪些 type 允许出现 breaking change
    allowBreakingChanges: ["feat", "fix"],

    // 每行最大长度（超出自动换行）
    breaklineNumber: 100,

    // 换行符号（body / breaking 中使用）
    breaklineChar: "|",

    // 跳过的提问步骤（例如 ['scope', 'body']）
    skipQuestions: [],

    // issue 前缀选项（常用于 gitee / gitlab）
    issuePrefixes: [
      // 关联 issue（进行中）
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      // 关闭 issue
      { value: "closed", name: "closed:   标记 ISSUES 已完成" }
    ],

    // 自定义 issue 前缀位置
    customIssuePrefixAlign: "top",

    // 不关联 issue 的别名
    emptyIssuePrefixAlias: "空",

    // 自定义 issue 前缀别名
    customIssuePrefixAlias: "自定义",

    // 是否允许自定义 issue 前缀
    allowCustomIssuePrefix: true,

    // 是否允许不填写 issue
    allowEmptyIssuePrefix: true,

    // 提交确认阶段是否高亮显示
    confirmColorize: true,

    // 针对不同 type 覆盖 scope（未使用）
    scopeOverrides: undefined,

    // body 默认值
    defaultBody: "",

    // issue 默认值
    defaultIssues: "",

    // scope 默认值
    defaultScope: "",

    // subject 默认值
    defaultSubject: ""
  }
})
