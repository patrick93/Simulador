<template>
  <div class="client-form">
    <form>
      <div class="form-group">
        <label class="form-control-label">CNPJ</label>
        <the-mask mask="##.###.###/####-##" :masked="false" type="text" class="form-control" :class="{'is-invalid': $v.cnpj.$error}" @input="$v.cnpj.$touch()" v-model="cnpj"></the-mask>
        <div class="invalid-feedback" v-if="$v.cnpj.$error">
          <span v-if="!$v.cnpj.required">Required</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-control-label">Email</label>
        <input type="email" v-model="email" class="form-control" :class="{'is-invalid': $v.email.$error}" @input="$v.email.$touch()">
        <div class="invalid-feedback" v-if="$v.email.$error">
          <span v-if="!$v.email.required">Required</span>
          <span v-if="!$v.email.email">Invalid email</span>
        </div>
      </div>
    </form>
    <button class="btn btn-success submit-button" v-on:click="submit">Enviar</button>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'ClientForm',
  components: { TheMask },
  data () {
    return {
      email: '',
      cnpj: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    cnpj: {
      required
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
