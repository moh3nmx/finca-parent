<template>
  <v-app id="auth_layout">
    <v-main class="">
      <v-container fluid class="d-flex align-center justify-center fill-height">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  middleware: 'need_guest'
}
</script>
<style lang="scss">
  #auth_layout {
    background-image: url('/background.png');
    background-size: cover;
  }
</style>