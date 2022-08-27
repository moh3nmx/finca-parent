<template>
  <div class="pa-6 d-flex flex-column justify-center" style="min-height: calc(100vh - 64px)">
    <div>
      <div class="text-h4 text-center font-weight-bold">پلن‌ها</div>
      <div class="mt-2 text-center">
        برای دسترسی کامل به درس‌نامه‌ها یکی از پلن های زیر را خریداری نمایید
      </div>
      <v-card flat color="transparent" class="mt-6">
        <v-card-text class="d-flex justify-center">
          <v-card outlined class="mx-4" max-width="240" min-width="240">
            <v-card-text>
              <v-img
                width="128"
                class="mx-auto"
                contain
                :aspect-ratio="1"
                src="/plan/plan1.svg"
              ></v-img>
              <div class="body-1 text-center font-weight-bold mt-4">
                اشتراک ۱ ماهه
              </div>
              <div class="text-center caption mt-4">
                دسترسی کامل به تمامی درس‌نامه‌ها
              </div>
              <div class="mt-4 success--text text-center">
                <br />
                200,000 تومان
              </div>
              <v-btn block depressed color="primary" class="mt-4">
                انتخاب
              </v-btn>
            </v-card-text>
          </v-card>
          <v-card outlined class="mx-4" min-width="240" max-width="240">
            <v-card-text>
              <v-img
                width="128"
                class="mx-auto"
                contain
                :aspect-ratio="1"
                src="/plan/plan2.svg"
              ></v-img>
              <div class="body-1 text-center font-weight-bold mt-4">
                اشتراک ۱ ماهه
              </div>
              <div class="text-center caption mt-4">
                دسترسی کامل به تمامی درس‌نامه‌ها
              </div>
              <div class="mt-4 success--text text-center">
                <span class="grey--text" style="text-decoration: line-through">600,000 تومان</span>
                <br>
                500,000 تومان
              </div>
              <v-btn block depressed color="primary" class="mt-4">
                انتخاب
              </v-btn>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>