const NORMAL_REG =
  /[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|[\u2600-\u27FF]/g

const noEmoji = {
  mounted(el) {
    const input = el.querySelector("input") || el.querySelector("textarea") || el

    const handler = e => {
      const value = e.target.value
      const newValue = value.replace(NORMAL_REG, "")

      // 没变化就不处理，避免重复触发
      if (value === newValue) return

      e.target.value = newValue

      // 通知 v-model
      e.target.dispatchEvent(new Event("input", { bubbles: true }))
    }

    input.__noEmojiHandler__ = handler
    input.addEventListener("input", handler)
    el.__noEmojiInput__ = input
  },

  beforeUnmount(el) {
    const input = el.__noEmojiInput__ || el
    if (input && input.__noEmojiHandler__) {
      input.removeEventListener("input", input.__noEmojiHandler__)
      delete input.__noEmojiHandler__
    }
    delete el.__noEmojiInput__
  }
}

export default noEmoji
