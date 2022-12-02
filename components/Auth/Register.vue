<template>
  <v-card width="100%" max-width="420" rounded="lg" elevation="10">
    <v-card-title class="justify-center"> ثبت نام در فینکا </v-card-title>
    <v-card-text class="pa-6 pt-2">
      <div class="body-1 text-center">اطلاعات خودتو کامل کن:</div>
      <v-form v-model="valid" class="mt-8">
        <v-row>
          <v-col cols="12">
            <base-label>نام</base-label>
            <v-text-field
              rounded
              outlined
              hide-details
              v-model="model.firstName"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <base-label>نام خانوادگی</base-label>
            <v-text-field
              rounded
              outlined
              hide-details
              v-model="model.lastName"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <base-label>سن</base-label>
            <v-text-field
              type="number"
              rounded
              outlined
              hide-details
              v-model="model.age"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          block
          rounded
          :disabled="!valid"
          :loading="loading"
          color="primary"
          class="mt-8"
          depressed
          large
          @click="register"
          >ثبت نام</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import { required } from "~/helpers/validation";
export default {
  data() {
    return {
      rules: {
        required,
      },
      valid: false,
      loading: false,
      model: {
        firstName: "",
        lastName: "",
        age: "",
        grade: null,
      },
    };
  },
  methods: {
    async register() {
      this.loading = true
      try {
        await this.$authService.register(this.model)
        await this.$auth.fetchUser()
        this.$router.push('/')
      } catch (e) {
        
      }

      this.loading = false
    }
  }
};
</script>
<style lang=""></style>
