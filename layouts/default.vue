<template>
  <v-app dark>
    <v-app-bar fixed style="z-index: 6" color="primary" dark>
      <v-toolbar-title>
        <v-img src="/finca-w.png" height="48" width="109" contain />
      </v-toolbar-title>
      <v-divider vertical style="margin-right: 130px" class="ml-8"></v-divider>
      <div class="title">
        پورتال والدین
      </div>
      <v-spacer />
      <!-- <v-app-bar-nav-icon @click.stop="openDrawer" /> -->
    </v-app-bar>
    <panel-sidebar />
    <v-main class="mt-16">
        <base-loading :loading="$store.state.loading" />
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  middleware: 'need_auth',
  data() {
    return {
      
    };
  },
  methods: {
  }
};
</script>

<style>
  .v-application {
    background: #f4f4f4 !important;
  }
</style>
