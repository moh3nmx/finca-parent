<template>
  <div class="pa-6">
    <div class="text-h4 font-weight-bold d-flex justify-space-between">
      پشتیبانی
      <v-btn depressed color="primary">
        <v-icon left>
          mdi-plus
        </v-icon>
        تیکت جدید
      </v-btn>
    </div>
    <div class="mt-2">
      در صورتی که نیاز به پشتیبانی دارید تیکت بزنید
    </div>
    
    <v-card outlined class="mt-6" min-height="calc(100vh - 204px)">
      <v-card-text>
        <v-data-table disable-sort :items="items" :headers="headers" hide-default-footer no-data-text="نتیجه‌ای یافت نشد">
          <template #item.status="{value}">
            <v-chip color="green" dark small v-if="value === 'بسته شده'">
              {{ value }}
            </v-chip>
            <v-chip color="amber" dark small v-if="value === 'در‌حال بررسی'">
              {{ value }}
            </v-chip>
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
          value: 'title',
          text: 'عنوان تیکت'
        },
        {
          value: 'status',
          text: 'وضعیت'
        },
        {
          value: 'time',
          text: 'تاریخ'
        }
      ],
      items: [
        {
          id: 1,
          title: 'مشکل در پرداخت',
          status: 'در‌حال بررسی',
          time: '1401/05/12 - 12:20'
        },
        {
          id: 2,
          title: 'مشکل در ورود',
          status: 'بسته شده',
          time: '1401/05/12 - 12:20'
        },
      ]
    }
  },
};
</script>
<style lang="">
</style>