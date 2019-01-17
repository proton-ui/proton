import RadioComponent from './Radio'
import RadioGroupComponent from './RadioGroup'

export default Vue => {
    Vue.component(RadioComponent.name, RadioComponent)
    Vue.component(RadioGroupComponent.name, RadioGroupComponent)
}