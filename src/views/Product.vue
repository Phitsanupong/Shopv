<template>
  <container>
    <h1>{{uid}}</h1>
    <v-card class="d-flex mb-6" color="lighten-2" flat tile>
      <div
        v-for="n in 2"
        :key="n"
        :class="n === 1 && 'mr-auto'"
        class="pa-2"
        outlined
        tile
      >
        <h1 v-if="n == 1">Product</h1>
        <Buy :buy="money" v-if="n == 2"></Buy>
      </div>
    </v-card>

    <All @explor_pro="see_pro" @buy="addMoney" class=""></All>
  </container>
</template>

<script>
import All from "../components/Sub_product.vue";
import Buy from "../components/BuyProduct.vue";
import { auth } from "@/plugins/firebase1";

import { onAuthStateChanged } from "firebase/auth";
export default {
  components: {
    All,
    Buy,
  },
  data: () => ({
    currun_id: "",
    money: 0,
    uid:"",
  }),
  mounted() {
    this.checkLogin()
  },
  methods: {
    see_pro(id_pro) {
      this.$router.push({ name: "detail", params: { Pid: id_pro } });
    },
    addMoney(i) {
      this.money = i + this.money;
    },

    checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties

          // https://firebase.google.com/docs/reference/js/firebase.User

          const uid = user.uid;

          console.log(uid);

          this.uid = uid;

         

          console.log("Heloooo");


         
        }
      });
    },
  },
};
</script>

<style>
</style>