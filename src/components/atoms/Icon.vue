<template>

  <div class="iconContainer">
    <span id="a">
      <img
        :src="icn"
        v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }"
        @mouseover="mouseOver"
        @mouseout="mouseOut"
      >
    </span>
  </div>

</template>

<script>

  export default {
    name: 'Icon',
    props: {
      name: String,
      icon: String,
      delay: Number
    },
    data () {
      console.log(this.icon)
      return {
        nm: this.name,
        icn: this.icon,
        dly: this.delay
      }
    },
    mounted () {
      const targets = this.$el
      this.$anime
        .timeline().add({
          targets,
          translateY: [-5, 0],
          opacity: [0.1, 1],
          duration: 2000,
          delay: this.delay
        })
        // .add({
        //   targets,
        //   rotate: '1turn',
        //   translateY: 0,
        //   duration: 2000,
        //   delay: this.delay + 500
        // })
    },
    methods: {
      mouseOver: function () {
      },
      mouseOut: function () {
      }
    }
  }

</script>

<style>

  span#a {
    position: relative;
    display: inline;
    background-color: transparent;
    /* animation: */
      /* textMoveOut 1s; */
  }

  li:hover span#a {
    /* animation:
      textMoveIn 1s; */
  }

</style>
