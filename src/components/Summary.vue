<template>
  <div class="summary">
    <div class="row">
      <div class="col-md-12">
        <h2 style="color:#0fad00">Pedido realizado com sucesso</h2>
        <p style="font-size:20px">Estamos analisando o pedido. Entraremos em contato por email com a resposta ao pedido. <br> Veja abaixo um resumo do pedido</p>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        Resumo
      </div>
      <div class="card-body">
        <div class="row client-info">
          <div class="col-md-6">
            <b>CNPJ:</b>
            <span>{{client.cnpj}}</span>
          </div>
          <div class="col-md-6">
            <b>Email:</b>
            <span>{{client.email}}</span>
          </div>
        </div>
        <loan-preview :loan-value="loan.value" :months="loan.months" :interest-rate="loan.interestRate"></loan-preview>
      </div>
    </div>
  </div>
</template>

<script>
import LoanPreview from './LoanPreview'

export default {
  name: 'Summary',
  components: { LoanPreview },
  data () {
    const { loan, client } = this.$store.getState()
    return {
      loan,
      client
    }
  }
}
</script>

<style scoped>
.client-info {
  margin-bottom: 10px;
}
</style>
