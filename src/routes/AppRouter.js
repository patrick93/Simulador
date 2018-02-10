import Router from 'vue-router'
import Loan from '../components/Loan'
import ClientForm from '../components/ClientForm'
import Summary from '../components/Summary'

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
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    }
  ]
})
