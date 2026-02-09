import { parallel } from "gulp"
import { buildFullEntry } from "./full-bundle.js"
import { buildModules } from "./modules.js"

export default parallel(buildFullEntry, buildModules)
