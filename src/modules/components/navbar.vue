<template>
  <div class="nav">
    <div class="menuCelu">
      <a class="text-nav nombre" href="/">Renato Parraguez</a>
      <div class="menu">
        <button v-on:click="activar = !activar" class="boton ocultarPc">
          <img src="../../assets/menu.png" alt="" />
        </button>
      </div>
      <div class="close">
        <img src="../../assets/close.png" alt="" class="ocultarPc" />
      </div>
    </div>
    <div :class="{ activo: activar }">
      <div class="links">
        <a class="text-nav" href="#AcercaMi">Acerca de mi</a>
        <a class="text-nav" href="#Tecnologias">Tecnologías</a>
        <a class="text-nav" href="#Proyectos">Proyectos</a>
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
      activar: true,
    };
  },
};
</script>
