<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Loan from './components/Loan'

export default {
  name: 'App',
  components: {
    Loan,
    Header
  }
}
</script>

<style scoped>
/* Space out content a bit */
body {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

/* Customize container */
@media (min-width: 48em) {
  .container {
    max-width: 46rem;
  }
}
.container-narrow > hr {
  margin: 2rem 0;
}
</style>
