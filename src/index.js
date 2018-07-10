import Vue from 'vue'

const Kite = {
    install(Vue) {
        Vue.mixin({
            mounted() {
                console.log('Mounted from Kite!')
            }
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Kite)
}

export default Kite
