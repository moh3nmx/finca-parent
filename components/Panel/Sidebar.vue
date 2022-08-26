<template lang="">
  <v-navigation-drawer app right permanent style="z-index: 1">
    <v-list class="mt-16 pt-4" shaped>
      <v-list-item v-on="item.on"  color="primary" v-bind="item" v-for="(item, index) in items" :key="index">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content v-text="item.text"></v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script >
export default({
  data() {
    return {
      items: [
        {
          icon: 'mdi-compass',
          text: 'داشبورد',
          to: '/',
          exact: true
        },
        {
          icon: 'mdi-puzzle',
          text: 'درس‌ها',
          to: '/lessons',
          exact: true
        },
        {
          icon: 'mdi-lock',
          text: 'خروج',
          on: {
            click: () => { console.log('logout');}
          },
          exact: true
        }
      ]    
    }
  },
})
</script>
<style lang="">
  
</style>