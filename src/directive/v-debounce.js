const handlerMap = new WeakMap()

/**
 * 提取指令参数：支持 v-debounce:click-500
 */
function parseBinding(arg) {
  let eventName = "click"
  let delay = 300

  if (arg) {
    const parts = arg.split("-")
    eventName = parts[0] || "click"
    if (parts[1]) delay = Number(parts[1])
  }
  return { eventName, delay }
}

const debounce = {
  mounted(el, binding) {
    const { value, arg } = binding
    if (typeof value !== "function") return

    const { eventName, delay } = parseBinding(arg)
    let timer = null

    // 核心处理函数
    const handler = (...args) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        // 这里的 this 指向 null 或根据需要指向 el
        value.apply(el, args)
      }, delay)
    }

    // 存储元数据，方便在 update 和 unmount 时精准解绑
    el.addEventListener(eventName, handler)
    handlerMap.set(el, { eventName, handler })
  },

  // 关键：当绑定的值（函数或延迟）改变时，需要更新监听器
  updated(el, binding) {
    if (binding.value === binding.oldValue && binding.arg === binding.oldArg) return

    // 先移除旧的
    removeHandler(el)
    // 再挂载新的
    debounce.mounted(el, binding)
  },

  beforeUnmount(el) {
    removeHandler(el)
  }
}

function removeHandler(el) {
  const data = handlerMap.get(el)
  if (data) {
    el.removeEventListener(data.eventName, data.handler)
    handlerMap.delete(el)
  }
}

export default debounce
