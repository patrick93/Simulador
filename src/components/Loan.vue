<template>
  <div class="loan">
    <form>
      <div class="form-group">
        <label class="form-control-label">Valor Empréstimo</label>
        <money class="form-control" v-model="price" v-bind="money"></money>
      </div>
      <div class="form-group">
        <label class="form-control-label">Parcelas</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label class="form-control-label">Juros</label>
        <input type="text" class="form-control">
      </div>
    </form>
  </div>
</template>

<script>
import { Money } from 'v-money'

export default {
  name: 'Loan',
  components: { Money },
  data () {
    return {
      price: 123.45,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      }
    }
  }
}
</script>

<style scoped>
.hello {
  margin-bottom: 10px;
}

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
</style>
