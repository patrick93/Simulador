<template>
  <div class="loan-preview">
    <table class="table">
      <tbody>
        <tr>
          <th>Valor</th>
          <td>{{loanValue.toLocaleString('pt-BR')}}</td>
        </tr>
        <tr>
          <th>Parcelas</th>
          <td>{{months.toLocaleString('pt-BR')}}</td>
        </tr>
        <tr>
          <th>Juros</th>
          <td>{{interestRate.toLocaleString('pt-BR')}}</td>
        </tr>
        <tr>
          <th>Valor Parcelas</th>
          <td>{{monthPayment.toLocaleString('pt-BR')}}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{{total.toLocaleString('pt-BR')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LoanPreview',
  props: ['loanValue', 'months', 'interestRate'],
  computed: {
    monthPayment: function () {
      const interestDecimal = this.interestRate / 100
      return (
        Math.ceil(
          this.loanValue *
            interestDecimal /
            (1 - 1 / Math.pow(1 + interestDecimal, this.months)) *
            100
        ) / 100
      )
    },
    total: function () {
      return Math.ceil(this.months * this.monthPayment * 100) / 100
    }
  }
}
</script>

<style scoped>
tr:first-child>th, tr:first-child>td {
  border: none
}
</style>
