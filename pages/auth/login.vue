<template>
  <v-card flat color="transparent" width="100%" max-width="420">
    <v-scroll-x-transition group leave-absolute>
      <auth-otp v-if="sent == false" @sent="toggle" :key="1" />
      <auth-verify @back="toggle" v-else :key="2" />
    </v-scroll-x-transition>
  </v-card>
</template>
<script>
export default {
  layout: "auth",
  data() {
    return {
      sent: false,
    };
  },
  methods: {
    toggle() {
      setTimeout(() => {
        this.sent = !this.sent
      }, 200);
    }
  }
};
</script>
<style lang=""></style>
