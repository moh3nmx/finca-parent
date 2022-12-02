<template>
  <v-fade-transition>
    <div
      class="d-flex align-center justify-center"
      id="loading_overlay"
      v-if="loading"
    >
      <v-progress-circular
        indeterminate
        size="100"
        width="10"
        color="white"
      ></v-progress-circular>
    </div>
  </v-fade-transition>
</template>
<script>
export default {
  props: {
    loading: Boolean,
  },
};
</script>
<style lang="scss">
#loading_overlay {
  background-color: rgba($color: #00479b, $alpha: 0.7);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
}
</style>
