const copy = {
  mounted(el, binding) {
    updateConfig(el, binding)

    el.__handleCopyClick__ = async () => {
      const text = String(el.__copyValue__ ?? "")
      const { success, fail, toast } = el.__copyOptions__

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text)
        } else {
          throw new Error("Clipboard API unavailable")
        }

        // 成功提示逻辑：只要设置了 .success 或 .toast 都要提示
        if (success || toast) showToast("复制成功")
      } catch {
        const isFallbackSuccess = fallbackCopy(text)

        if (isFallbackSuccess) {
          // 回退方案成功也视作成功
          if (success || toast) showToast("复制成功")
        } else {
          // 彻底失败：设置了 .fail 或 .toast 都要提示
          if (fail || toast) showToast("复制失败，请手动尝试")
        }
      }
    }
    el.addEventListener("click", el.__handleCopyClick__)
  },

  updated(el, binding) {
    updateConfig(el, binding)
  },

  beforeUnmount(el) {
    el.removeEventListener("click", el.__handleCopyClick__)
  }
}

function updateConfig(el, binding) {
  el.__copyValue__ = binding.value
  el.__copyOptions__ = {
    // 这里的 binding.modifiers 就是一个对象，包含所有点缀的修饰符
    success: binding.modifiers.success,
    fail: binding.modifiers.fail,
    toast: binding.modifiers.toast
  }
}
/**
 * 优化后的回退方案
 */
function fallbackCopy(text) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  // 使元素在视觉上不可见，且不占空间
  textArea.style.position = "fixed"
  textArea.style.left = "-9999px"
  textArea.style.top = "10px"
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  try {
    const successful = document.execCommand("copy")
    return successful
  } catch (err) {
    console.error("无法复制", err)
    return false
  } finally {
    document.body.removeChild(textArea)
  }
}

function showToast(title) {
  // 兼容 uni-app 环境
  if (typeof uni !== "undefined") {
    uni.showToast({ title, icon: "none" })
  } else {
    alert(title) // 浏览器环境兜底
  }
}

export default copy
