import copy from "./directive/v-copy"
import debounce from "./directive/v-debounce"
import noEmoji from "./directive/v-noEmoji"
const directives = {
  copy,
  debounce,
  noEmoji
}

export { copy as vCopy, debounce as vDebounce, noEmoji as vNoEmoji }

export default {
  install(app) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
  }
}
