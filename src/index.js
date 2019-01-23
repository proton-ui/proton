import * as Components from './components'
import * as Directives from './directives'
import EventBusPlugin from './support/eventbus'

const moment = require('moment')

const Proton = {
    install(Vue) {
        Vue.use(EventBusPlugin)

        Vue.prototype.moment = function() {
            return moment
        }

        Object.values(Components).forEach((Component) => {
            Vue.use(Component)
        })

        Object.values(Directives).forEach((Directive) => {
            Vue.use(Directive)
        })
    }
}

// Auto-install plugin
let GlobalVue = null

if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue
}

if (GlobalVue) {
    GlobalVue.use(Proton)
}

export default Proton
