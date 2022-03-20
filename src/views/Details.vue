<template>
  <container>
    <div v-for="(prd, index) in detail_product" :key="index">
      <div v-if="prd.id === proId" class="">
        <v-img
          contain
          max-height="245"
          max-width="400"
          :src="prd.img_pic"
          class="position_size float-sm-left"
        ></v-img>

        <h1 class="position_text">
          {{ prd.pro_name }}
        </h1>
        <h1 class="position_text mb-5">{{ prd.price }}Bath</h1>

        <p class="position_text mb-5">Detail : {{ prd.tell }}</p>
      </div>
    </div>
  </container>
</template>

<script>
export default {
  name: "detail",

  data() {
    return {
      show: false,
      proId: this.$route.params.Pid,
      idP: "hello",
      detail_product: [
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
    };
  },
  methods: {},
};
</script>

<style>
.position_size {
  margin: 30px;
}
.position_text {
  position: relative;
  left: 30px;
  font-size: 30px;
}
</style>