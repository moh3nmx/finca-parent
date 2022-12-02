<template>
  <v-card width="100%" max-width="420" rounded="lg" elevation="10">
    <v-card-title class="justify-center"> تایید شماره موبایل </v-card-title>
    <v-card-text class="pa-6 pt-2">
      <div class="text-center d-flex align-center justify-space-between body-1">
       کد یکبار مصرف ارسال شده را وارد کن:
       <a @click="$emit('back')">بازگشت</a>
      </div>
      <v-form v-model="valid" class="mt-8">
        <base-label>کد تایید</base-label>
        <div dir="ltr">
          <v-otp-input
          type="number"
          length="4"
          :rules="[rules.required, v => !!v && v.length == 4 || '']"
          hide-details
          outlined
          rounded
          v-model="model.code"
          :disabled="loading"
        />
        </div>

        <v-btn
          block
          rounded
          :disabled="!valid"
          :loading="loading"
          color="primary"
          class="mt-8"
          depressed
          large
          @click="verifyOTP"
          >ورود</v-btn
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
        phoneNumber: this.$route.query.phoneNumber,
        code: ''
      },
    };
  },
  methods: {
    async verifyOTP() {
      this.loading = true;
      try {
        const data = await this.$authService.verifyOTP(this.model);
        
        await this.$auth.setUserToken(data.jwtToken);
        this.$router.push('/')
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
