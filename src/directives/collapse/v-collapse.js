import EventBus from '../../support/eventbus'

function bind(el, binding, vnode) {
    
    el.addEventListener('click', (e) => {
        EventBus.$emit('toggle-collapse-' + binding.arg)
    })
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})