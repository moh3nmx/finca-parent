<template>
  <v-navigation-drawer v-model="drawer" width="540" temporary fixed>
    <div class="d-flex pa-4" id="level_assets" dir="ltr">
      <div id="empty-container" class="blocks-empty">
        
      </div>
      <div class="left-side">
        <div id="blocks" class="blocks">
          <img
            id="first-block"
            src="/assets/blocks/walk.png"
            draggable="false"
          />
        </div>
      </div>
      <v-divider
        vertical
        class="mx-2"
        style="height: calc(100vh - 32px)"
      ></v-divider>
      <div id="right-container" class="right-side">right</div>
    </div>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    open() {
      this.drawer = true;
    },
  },
};
</script>
<style lang="scss">
#level_assets {
  position: relative;
  height: 100vh;

  .blocks {
    &-empty {
      position: absolute;
      left: 16px;
      top: 16px;
      right: 16px;
      bottom: 16px;
      z-index: -1;
    }
  }
  .left-side {
    width: 200px;
  }
  .right-side {
    width: 300px;
  }
}
</style>