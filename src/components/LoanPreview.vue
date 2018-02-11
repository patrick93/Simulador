<template>
  <div class="loan-preview">
    <table class="table">
      <tbody>
        <tr>
          <th class="w-50">Valor</th>
          <td class="w-50">{{loanValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}}</td>
        </tr>
        <tr>
          <th class="w-50">Meses</th>
          <td class="w-50">{{months.toLocaleString('pt-BR')}}</td>
        </tr>
        <tr>
          <th class="w-50">Juros</th>
          <td class="w-50">{{interestRate.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}} %</td>
        </tr>
        <tr>
          <th class="w-50">Parcelas</th>
          <td class="w-50">{{monthPayment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}}</td>
        </tr>
        <tr>
          <th class="w-50">Total</th>
          <td class="w-50">{{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}}</td>
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
      const pmt = (
        Math.ceil(
          this.loanValue * interestDecimal / (1 - 1 / Math.pow(1 + interestDecimal, this.months)) * 100
        ) / 100
      )
      return isNaN(pmt) ? 0 : pmt
    },
    total: function () {
      const total = Math.ceil(this.months * this.monthPayment * 100) / 100
      return isNaN(total) ? 0 : total
    }
  }
}
</script>

<style scoped>
tr:first-child>th, tr:first-child>td {
  border: none
}
</style>
