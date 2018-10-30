import pOption from './pOption'
import pSelect from './pSelect'

export default Vue => {
    Vue.component(pOption.name, pOption)
    Vue.component(pSelect.name, pSelect)
}