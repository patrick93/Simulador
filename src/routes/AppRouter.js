import Router from 'vue-router'
import Loan from '../components/Loan'
import ClientForm from '../components/ClientForm'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loan',
      component: Loan
    },
    {
      path: '/client',
      name: 'ClientForm',
      component: ClientForm
    }
  ]
})
