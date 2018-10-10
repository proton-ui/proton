const components = require.context('./components', true, /[a-z0-9]+\.vue$/)

const Proton = {
    install(Vue) {
        const nameReg = /([a-z0-9]+)\./i

        components.keys().forEach(key => {
            const name = key.match(nameReg)[1]
            Vue.component(name, components(key))
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
