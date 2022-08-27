<template>
  <div>
    <v-card
      tile
      flat
      dark
      class="children-header d-flex align-center px-8 pb-12"
      style="min-height: 354px"
    >
      <div>
        <div class="text-h4 font-weight-bold">به پورتال والدین خوش اومدی!</div>
        <div class="body-1 mt-4" style="max-width: 320px">
          محسن و احمد کارشون درسته همین ۵ ساعت پیش داشتن برنامه نویسی یاد
          میگرفتن!
        </div>
      </div>
    </v-card>

    <div class="pa-6">
      <div>
        <v-btn rounded depressed color="primary">
          <v-avatar left class="ml-2 mr-n2" size="24">
            <v-img src="https://i.pravatar.cc/50?1"></v-img>
          </v-avatar>
          محسن
        </v-btn>

        <v-btn rounded depressed color="grey lighten-2">
          <v-avatar left class="ml-2 mr-n2" size="24">
            <v-img src="https://i.pravatar.cc/50?2"></v-img>
          </v-avatar>
          احمد
        </v-btn>

        <v-btn rounded depressed color="grey lighten-2">
          <v-icon left> mdi-plus-circle </v-icon>
          افزودن فرزند
        </v-btn>
      </div>

      <v-card outlined class="mt-6">
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-list-item>
                <v-list-item-icon>
                  <v-img src="/children/avatar.png" width="100"></v-img>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon color="indigo">
                      mdi-account-box
                    </v-icon>
                    <b> محسن </b></v-list-item-title>
                  <v-list-item-subtitle class="my-4">
                    <v-icon color="cyan">mdi-diamond-stone</v-icon>
                    <b>
                      رایگان -
                      <a>ارتقا پلن</a>
                    </b>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon color="blue">mdi-history</v-icon>
                    <b> ۲۹ روز مانده </b>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="8">
              <div class="body-1 font-weight-bold">وضعیت پیشرفت فرزند:</div>
              <v-card outlined class="mt-4" v-for="i in 3">
                <v-card-text class="d-flex align-center">
                  <v-img
                    :aspect-ratio="1"
                    max-width="64"
                    width="64"
                    height="64"
                    src="https://www.tynker.com/static/course-card/vertical/level-100.png"
                  ></v-img>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>مقدمه {{ i }}</v-list-item-title>
                      <v-list-item-subtitle>سطح {{ i }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-spacer></v-spacer>

                  <div style="width: 250px">
                    <v-progress-linear height="10" color="success" value="60" />
                    <div
                      class="
                        d-flex
                        body-2
                        mt-2
                        align-center
                        justify-space-between
                      "
                    >
                      <div>10% تکمیل شده</div>
                      <div>11/17</div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    // loadLevel()
  },
};
</script>


<style lang="scss">
.children-header {
  background-image: url(/children/bg-swoosh-off-white.svg),
    url(/children/children.png),
    linear-gradient(90deg, #02bcd4 15%, #4e85fb 85%);
  background-position: bottom, left 20% center, 50%;
  background-size: 110% 4rem, 18rem, auto;
}
</style>