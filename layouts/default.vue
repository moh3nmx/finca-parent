<template>
  <v-app dark>
    <v-app-bar fixed style="z-index: 6">
      <v-toolbar-title>
        <v-img src="/finca.png" height="48" width="109" contain />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="openDrawer" />
    </v-app-bar>
    <panel-sidebar />
    <v-main class="mt-16">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <game-drawer ref="drawer" />
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    openDrawer() {
      this.$refs.drawer.open()
    }
  }
};
</script>
