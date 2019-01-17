import EventBus from '../../support/eventbus'

function bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
        EventBus.$emit('toast', { level: (binding.arg || 'default'), message: binding.value })
    })
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})