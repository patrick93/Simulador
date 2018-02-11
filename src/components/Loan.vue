<template>
  <div class="loan">
    <form>
      <div class="form-group">
        <label class="form-control-label">Valor Empréstimo</label>
        <money class="form-control" :class="{'is-invalid': $v.loan.value.$error}" v-model="loan.value" v-bind="loan.format" @input="$v.loan.value.$touch()"></money>
        <div class="invalid-feedback" v-if="$v.loan.value.$error">
          <span v-if="!$v.loan.value.between">O valor do empréstimo deve ser entre {{$v.loan.value.$params.between.min.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}} e {{$v.loan.value.$params.between.max.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}}</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-control-label">Meses</label>
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
        <money class="form-control" :class="{'is-invalid': $v.interestRate.value.$error}" v-model="interestRate.value" v-bind="interestRate.format" @input="$v.interestRate.value.$touch()"></money>
        <div class="invalid-feedback" v-if="$v.interestRate.value.$error">
          <span v-if="!$v.interestRate.value.between">A taxa de juros deve ser entre {{$v.interestRate.value.$params.between.min.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}}% e {{$v.interestRate.value.$params.between.max.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}}%</span>
        </div>
      </div>
    </form>
    <div class="card preview">
      <div class="card-header">
        Resultado
      </div>
      <div class="card-body">
        <loan-preview :loan-value="loan.value" :months="months" :interest-rate="interestRate.value"></loan-preview>
      </div>
    </div>
    <button class="btn btn-success submit-button" :disabled="isFormValid()" v-on:click="submit">Enviar</button>
  </div>
</template>

<script>
import { Money } from 'v-money'
import { between } from 'vuelidate/lib/validators'
import LoanPreview from './LoanPreview'

export default {
  name: 'Loan',
  components: { Money, LoanPreview },
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
        value: 3,
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
  validations: {
    loan: {
      value: {
        between: between(0, 100000)
      }
    },
    interestRate: {
      value: {
        between: between(3, 8)
      }
    }
  },
  methods: {
    submit: function () {
      this.$store.setLoan({ months: this.months, value: this.loan.value, interestRate: this.interestRate.value })
      this.$router.push('client')
    },
    isFormValid: function () {
      return this.$v.$invalid
    }
  }
}
</script>

<style scoped>
.preview {
  margin-bottom: 10px;
}

.submit-button {
  float: right;
}
</style>
