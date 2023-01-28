<template>
  <div class="nav">
    <div class="menuCelu">
      <a class="text-nav nombre" href="/">Renato Parraguez</a>
      <div class="menu">
        <button v-on:click="activar = !activar" class="boton ocultarPc">
          <img src="../../assets/menu.png" class="boton-menu" alt="" />
        </button>
      </div>

    </div>
    <div :class="{ activo: activar }" class="animacion">
      <div class="close">
        <button v-on:click="activar = !activar" class="boton ocultarPc">
          <img src="../../assets/close.png" alt="" class="ocultarPc" />
        </button>
      </div>

      <div class="links">
        <a class="text-nav" href="#AcercaMi" v-on:click="activar = !activar"
          >Acerca de mi</a
        >
        <a class="text-nav" href="#Tecnologias" v-on:click="activar = !activar"
          >Tecnologías</a
        >
        <a class="text-nav" href="#Proyectos" v-on:click="activar = !activar"
          >Proyectos</a
        >
        <div class="source">
          <a
            class="text-nav"
            href="https://github.com/Nato18/Portafolio-Vue"
            target="_blank"
            >Código</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activar: false,
    };
  },
};
</script>
