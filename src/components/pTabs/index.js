import pTab from './pTab'
import pTabs from './pTabs'

export default Vue => {
    Vue.component(pTabs.name, pTabs)
    Vue.component(pTab.name, pTab)
}