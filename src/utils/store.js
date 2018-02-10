function createStore () {
  const state = {
    loan: {
      value: 0,
      months: 0,
      interestRate: 0
    },
    client: {
      cnpj: '',
      email: ''
    }
  }

  function getState () {
    return state
  }

  function setLoan (loan) {
    state.loan = loan
  }

  function setClient (client) {
    state.client = client
  }

  return { getState, setLoan, setClient }
}

export { createStore }
