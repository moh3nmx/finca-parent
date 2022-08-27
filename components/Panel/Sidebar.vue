<template>
  <v-navigation-drawer app right permanent style="z-index: 1" dark color="primary">
    <v-list dark class="mt-16 pt-4" shaped>
      <v-list-item two-line>
        <v-list-item-avatar size="48">
          <v-img src="https://i.pravatar.cc/50"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>رضا نجفی</v-list-item-title>
          <v-list-item-subtitle class="mt-2">09123456789 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="my-4"></v-divider>
      <v-list-item v-on="item.on"  color="white" v-bind="item" v-for="(item, index) in items" :key="index">
        <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.color"></v-icon>
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
          icon: 'mdi-human-male-female-child',
          text: 'فرزندان',
          to: '/',
          exact: true,
          color: ''
        },
        {
          icon: 'mdi-diamond',
          text: 'پلن‌ها',
          to: '/plans',
          exact: true,
          color: 'cyan'
        },
        {
          icon: 'mdi-cash-multiple',
          text: 'تراکنش‌ها',
          to: '/transactions',
          exact: true,
          color: 'green'
        },
        {
          icon: 'mdi-face-agent',
          text: 'پشتیبانی',
          to: '/support',
          exact: true,
          color: 'blue'
        },
        {
          icon: 'mdi-certificate-outline',
          text: 'گواهی/مدرک',
          to: '/certificate',
          exact: true,
          color: '#CDDC39'
        },
        {
          icon: 'mdi-trophy',
          text: 'دستاورد‌ها',
          to: '/achievments',
          exact: true,
          color: 'amber'
        },
        {
          icon: 'mdi-lock',
          text: 'خروج',
          color: 'error',
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