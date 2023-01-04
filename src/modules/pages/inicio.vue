<template>
  <navbar />
  <perfil />
  <sobremi />
  <tecnologias />
  <proyectos />
  <footerPag />
</template>

<script>
import navbar from "../components/navbar.vue";
import perfil from "../components/perfil.vue";
import sobremi from "../components/sobremi.vue";
import tecnologias from "../components/tecnologias.vue";
import proyectos from "../components/proyectos.vue";
import footerPag from "../components/footer.vue";
export default {
  components: { navbar, perfil, sobremi, tecnologias, proyectos, footerPag },
};
</script>
