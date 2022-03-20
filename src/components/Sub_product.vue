<template>
  <div>
    
    <v-row no-gutters>
      <v-col v-for="(product, index) in list_product" :key="index" cols="sm">
        <v-card class="pa-2 mx-auto mb-5" outlined tile max-width="400">
          <v-img
            class="white--text align-end"
            height="250px"
            :src="product.img_pic"
          >
          </v-img>
          <v-card-title class="name_font">
            <h3>{{ product.pro_name }}</h3>
          </v-card-title>

          <v-card-text class="text--primary">
            <h2>{{ product.price }}  Bath</h2>

            <div>{{ product.tell }}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="orange" text class="justify-center" @click="explor(product.id)">DETAIL</v-btn>
            <v-spacer />
            <v-btn color="primary" elevation="3" rounded x-large class="" @click="buy_TOaddMoney(product.price)">BUY</v-btn>
         </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Allproduct",
  data: () => ({
    list_product: [
      {
        id: "001",
        pro_name: "Nike Air Force 1",
        price: 3700,
        img_pic:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c76be31b-59c6-438b-b777-b2b8dfe1f0bc/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-mid-07-lv8-fwVpt9.png",
        tell: "Nike Air Force 1",
      },
      {
        id: "002",
        pro_name: "NIKE Court Vision Low Next Nature",
        price: 2100,
        img_pic: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw6b3bb81b/images/61563201/Rebel_61563201_whitepink_hi-res.jpg?sw=1000&sh=1000&sm=fit",
        tell: "NIKE Court Vision Low Next Nature",
      },
      {
        id: "003",
        pro_name: "Nike Air Max 97",
        price: 4800,
        img_pic: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a09af7ea-0f32-416f-a294-081d56b8d40c/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-97-se-FvBZ0j.png",
        tell: "Nike Air Max 97",
      },
      {
        id: "004",
        pro_name: "Air Jordan 1 Elevate Low",
        price: 5200,
        img_pic:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b51fd349-3ed2-493d-bd94-221534f79964/air-jordan-1-elevate-low-womens-shoes-422X83.png",
        tell: "Air Jordan 1 Elevate Low",
      },
   
    ],
  }),
  methods:{
    explor(i){
       this.$emit("explor_pro",i);
    
    },
    buy_TOaddMoney(i){
      
      this.$emit("buy",i);
    }
  }
};
</script>

<style>
.name_font {
  color: black;
}
.position {
  position: relative;
  left: 280px;
}
</style>