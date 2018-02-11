<template>
  <div class="client-form">
    <form>
      <div class="form-group">
        <label class="form-control-label">CNPJ</label>
        <the-mask mask="##.###.###/####-##" :masked="true" type="text" class="form-control" :class="{'is-invalid': $v.cnpj.$error}" @input="$v.cnpj.$touch()" v-model="cnpj"></the-mask>
        <div class="invalid-feedback" v-if="$v.cnpj.$error">
          <span v-if="!$v.cnpj.required">Este campo é necessário</span>
          <span v-if="!$v.cnpj.cnpj">CNPJ inválido</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-control-label">Email</label>
        <input type="email" v-model="email" class="form-control" :class="{'is-invalid': $v.email.$error}" @input="$v.email.$touch()">
        <div class="invalid-feedback" v-if="$v.email.$error">
          <span v-if="!$v.email.required">Este campo é necessário</span>
          <span v-if="!$v.email.email">Email inválido</span>
        </div>
      </div>
    </form>
    <button class="btn btn-success submit-button" :disabled="isFormValid() || loading" v-on:click="submit">{{ getSubmitButtonMessage() }}</button>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { required, email } from 'vuelidate/lib/validators'
import cnpj from '../utils/custom-validators'

export default {
  name: 'ClientForm',
  components: { TheMask },
  data () {
    return {
      email: '',
      cnpj: '',
      loading: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    cnpj: {
      required,
      cnpj
    }
  },
  methods: {
    submit: function () {
      this.loading = true
      this.$store.setClient({ cnpj: this.cnpj, email: this.email })
      this.$http.post('https://httpbin.org/post', this.$store.getState()).then(response => {
        this.loading = false
        this.$router.push('/summary')
      }, error => {
        this.loading = false
        console.error(error)
      })
    },
    isFormValid: function () {
      return this.$v.$invalid
    },
    getSubmitButtonMessage: function () {
      return this.loading ? 'Enviando...' : 'Enviar'
    }
  }
}
</script>

<style scoped>
.submit-button {
  float: right;
}
</style>
