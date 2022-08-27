<template>
  <div class="pa-6">
    <div class="text-h4 font-weight-bold">تراکنش‌ها</div>
    <div class="mt-2">
      تراکنش‌های حساب کاربری خود را در بخش می‌توانید مشاهده کنید
    </div>
    
    <v-card outlined class="mt-6" min-height="calc(100vh - 204px)">
      <v-card-text>
        <v-data-table disable-sort :items="items" :headers="headers" hide-default-footer no-data-text="نتیجه‌ای یافت نشد">
          <template #item.amount="{value}">
            <div class="green--text">
              {{ value }} تومان
            </div>
          </template>
        </v-data-table>
        <!-- <v-datatable> </v-datatable> -->
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          value: 'id',
          text: 'شماره',
          width: 40
        },
        {
          value: 'type',
          text: 'نوع تراکنش'
        },
        {
          value: 'amount',
          text: 'مبلغ تراکنش'
        },
        {
          value: 'time',
          text: 'تاریخ'
        }
      ],
      items: [
        {
          id: 1,
          type: 'خرید',
          amount: '120,000',
          time: '1401/05/12 - 12:20'
        },
        {
          id: 2,
          type: 'خرید',
          amount: '120,000',
          time: '1401/05/12 - 12:20'
        },
        {
          id: 3,
          type: 'خرید',
          amount: '120,000',
          time: '1401/05/12 - 12:20'
        },
      ]
    }
  },
};
</script>
<style lang="">
</style>