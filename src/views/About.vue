<template>
  <div>
    <v-layout row wrap justify-center class="text-center">
      <v-flex xs6>
        <br /><br /><br /><br /><br />

        <v-btn color="accent" elevation="2" @click="logOut" outlined raised>Logout</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase1";
import { signOut } from "firebase/auth";

export default {
  
    
  methods: {
    logOut() {
      signOut(auth)
        


      this.$router.push("/");
    },
  },
};
</script>

