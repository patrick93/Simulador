<template>
  <div class="loan">
    <form>
      <div class="form-group">
        <label class="form-control-label">Valor Empréstimo</label>
        <money class="form-control" v-model="loan.value" v-bind="loan.format"></money>
      </div>
      <div class="form-group">
        <label class="form-control-label">Parcelas</label>
        <select v-model="months" class="form-control">
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-control-label">Juros</label>
        <money class="form-control" v-model="interestRate.value" v-bind="interestRate.format"></money>
      </div>
    </form>
    <div class="card preview">
      <div class="card-header">
        Resultado
      </div>
      <div class="card-body">
        <table class="table">
          <tbody>
            <tr>
              <th>Valor</th>
              <td>{{loan.value.toLocaleString('pt-BR')}}</td>
            </tr>
            <tr>
              <th>Parcelas</th>
              <td>{{months.toLocaleString('pt-BR')}}</td>
            </tr>
            <tr>
              <th>Juros</th>
              <td>{{interestRate.value.toLocaleString('pt-BR')}}</td>
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
    </div>
    <button class="btn btn-success submit-button" v-on:click="submit">Enviar</button>
  </div>
</template>

<script>
import { Money } from 'v-money'

export default {
  name: 'Loan',
  components: { Money },
  data () {
    return {
      loan: {
        value: 0,
        format: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: '',
          precision: 2,
          masked: false
        }
      },
      months: 3,
      interestRate: {
        value: 0,
        format: {
          decimal: ',',
          thousands: '.',
          prefix: '',
          suffix: ' %',
          precision: 2,
          masked: false
        }
      }
    }
  },
  computed: {
    monthPayment: function () {
      const interestDecimal = this.interestRate.value / 100
      return Math.ceil((this.loan.value * interestDecimal) / (1 - (1 / (Math.pow(1 + interestDecimal, this.months)))) * 100) / 100
    },
    total: function () {
      return Math.ceil(this.months * this.monthPayment * 100) / 100
    }
  },
  methods: {
    submit: function () {
      this.$router.push('client')
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.preview {
  margin-bottom: 10px;
}

.submit-button {
  float: right;
}
</style>
