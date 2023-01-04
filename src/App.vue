<template>
  <div class="fondo">
    <inicio />
  </div>
</template>

<script>
import inicio from "./modules/pages/inicio.vue";
export default {
  name: "App",
  components: {
    inicio,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");
html {
  /* background-color: #232323; */
  background-image: linear-gradient(
    to left bottom,
    #000000,
    #0f0104,
    #190307,
    #210408,
    #270608,
    #360b10,
    #470d15,
    #580f18,
    #791620,
    #9b1e28,
    #bd282e,
    #e13333
  );
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
}
.fondo {
  margin: 0 auto;
}
</style>
