// import { req } from 'vuelidate/lib/validators/common'
import { withParams } from 'vuelidate'
import { validateCNPJ } from './cnpj-validator'

export default withParams({type: 'cnpj'}, value => validateCNPJ(value))
