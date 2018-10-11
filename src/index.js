import * as pComponents from './components'

const Proton = {
    install(Vue) {
        const nameReg = /([a-z0-9]+)\./i

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
