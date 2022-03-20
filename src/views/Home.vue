<template>
  <div>
    <v-layout row wrap justify-center class="text-center">
      <v-flex xs6>
        <br /><br /><br /><br /><br />
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Password"></v-text-field>
        <v-btn color="accent" elevation="2" @click="login" outlined raised>Login</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/plugins/firebase1";

export default {
  name: "Home",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;

          console.log("User = " + user.uid);

          // ...

          if (user.uid === "") {
            this.$emit("changeAdmin", true);
          }

          //this.$emit("show_hem", true);

          this.$router.push("/product");
        })

        .catch((error) => {
          const errorCode = error.code;

          const errorMessage = error.message;

          console.log(errorCode + " " + errorMessage);
        });
    },
  },
};
</script>
