<template>
  <div class="client-form">
    <form>
      <div class="form-group">
        <label class="form-control-label">CNPJ</label>
        <input type="text" v-model="cnpj" class="form-control">
      </div>
      <div class="form-group">
        <label class="form-control-label">Email</label>
        <input type="email" v-model="email" class="form-control">
      </div>
    </form>
    <button class="btn btn-success submit-button" v-on:click="submit">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'ClientForm',
  data () {
    return {
      email: '',
      cnpj: ''
    }
  },
  methods: {
    submit: function () {
      console.log(this.email)
      console.log(this.cnpj)
    }
  }
}
</script>

<style scoped>
.submit-button {
  float: right;
}
</style>
