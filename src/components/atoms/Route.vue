<template>

  <div class="route">
    <router-link :to="rt">
      <div ref="link">
        <!-- <span ref="linktext" @mouseover="mouseOver" @mouseout="mouseOut">{{ nm.charAt(0) }}</span> -->
        <span :class="{ 'current-route-link': actv }" class="header route-link letters" ref="linktext" @mouseover="mouseOver" @mouseout="mouseOut">{{ nm }}</span>
      </div>
    </router-link>
  </div>

</template>

<script>

  export default {
    name: 'Route',
    props: {
      name: String,
      route: String,
      active: Boolean,
      delay: Number
    },
    data () {
      return {
        nm: this.name,
        rt: this.route,
        actv: this.active,
        dly: this.delay
      }
    },
    watch: {
      active: function () {
        this.actv = this.active
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
        console.log('mouseover')
      //   for (var i = this.nm.length; i > 0 ; i--) {
      //     var span = "<span class='ghost hidden'>" + this.nm.charAt(i) + "</span>";
      //     this.$refs.linktext.insertAdjacentHTML("afterend", span);
      //   }
      //   for (var i = 1; i < this.nm.length; i++) {
      //     var time = 100 + (i * 50);
      //     setTimeout(this.removeHidden, time, i)
      //   }

        // const targets = this.$el
        // this.$anime
        //   .timeline().add({
        //     targets,
        //     translateY: [-500, 0],
        //     // opacity: [0.1, 1],
        //     duration: 2000,
        //     delay: this.delay
        //   })
      },
      mouseOut: function () {
        console.log('mouseout')
      //   for (var j = this.nm.length; j > 0; j--) {
      //     this.$refs.link.lastElementChild.remove();
      //   }
      },
      removeHidden: function (child) {
        // for (var i = 1; i < this.nm.length; i++) {
          // this.$refs.link.children[child].classList.remove('hidden')
        // }
      }
    }
  }

</script>

<style>

  .letters {
    opacity: 1;
    max-width: 2em;
    /* transition: all 0.5s ease-in-out; */
  }

  .ghost.hidden {
    opacity: 0;
    max-width: 0;
  }

</style>
