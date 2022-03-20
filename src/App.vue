<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        

        
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <span class="mr-2">Home</span>
      </v-btn> 
      |
      <v-btn to="/about" text>
        <span class="mr-2">Profile</span>
      </v-btn> 
      |
      <v-btn to="/product" text>
        <span class="mr-2">Product</span>
      </v-btn> 
      
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
