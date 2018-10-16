import * as pComponents from './components'

const moment = require('moment')

const Proton = {
    install(Vue) {
        Vue.prototype.moment = moment

        Object.values(pComponents).forEach((pComponent) => {
            Vue.use(pComponent)
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
