<template>
  <v-card width="100%" max-width="420" rounded="lg" elevation="10">
    <v-card-title class="justify-center"> داشبورد والدین فینکا </v-card-title>
    <v-card-text class="pa-6 pt-2">
      <div class="text-center body-1">
        برای ورود یا ثبت نام شماره تماسی که با آن ثبت نام کرده‌اید را وارد نمایید:
      </div>
      <v-form v-model="valid" class="mt-8" @submit.prevent="requestOTP">
        <base-label>شماره موبایل</base-label>
        <v-text-field
          type="tel"
          :rules="[rules.mobile, rules.required]"
          hide-details
          outlined
          rounded
          v-model="model.phoneNumber"
          :disabled="loading"
        />

        <v-btn
          block
          rounded
          :disabled="!valid"
          :loading="loading"
          color="primary"
          class="mt-8"
          depressed
          large
          @click="requestOTP"
          >ادامه</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import { mobile, required } from "~/helpers/validation";
export default {
  data() {
    return {
      rules: { mobile, required },
      valid: false,
      loading: false,
      model: {
        phoneNumber: "",
      },
    };
  },
  methods: {
    async requestOTP() {
      this.loading = true;
      if(this.valid)
      try {
        await this.$authService.requestOTP(this.model);
        this.$router.push({query: { phoneNumber: this.model.phoneNumber }})
        this.$emit('sent')
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
  },
};
</script>
<style lang=""></style>
