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

export default Kite
