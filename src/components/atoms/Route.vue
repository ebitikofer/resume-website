<template>

  <div class="route">
    <router-link :to="rt">
      <div ref="link">
        <!-- <span ref="linktext" @mouseover="mouseOver" @mouseout="mouseOut">{{ nm.charAt(0) }}</span> -->
        <span ref="linktext" @mouseover="mouseOver" @mouseout="mouseOut">{{ nm }}</span>
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
    delay: Number
  },

  data () {
    return {
      nm: this.name,
      rt: this.route,
      dly: this.delay
    }
  },

  mounted () {
    const targets = this.$el
    this.$anime
      .timeline().add({
        targets,
        translateY: 5,
        opacity: [0.1, 1],
        // backgroundColor: '#FFF',
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
      console.log("mouseover");
    //   for (var i = this.nm.length; i > 0 ; i--) {
    //     var span = "<span class='ghost hidden'>" + this.nm.charAt(i) + "</span>";
    //     this.$refs.linktext.insertAdjacentHTML("afterend", span);
    //   }
    //   for (var i = 1; i < this.nm.length; i++) {
    //     var time = 100 + (i * 50);
    //     setTimeout(this.removeHidden, time, i)
    //   }
    },

    mouseOut: function () {
      console.log("mouseout");
    //   for (var j = this.nm.length; j > 0; j--) {
    //     this.$refs.link.lastElementChild.remove();
    //   }
    },

    removeHidden: function (child) {
      // for (var i = 1; i < this.nm.length; i++) {
        this.$refs.link.children[child].classList.remove("hidden");
      // }
    }

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

ul {
  background-color: transparent;
	font-family: 'Raleway', sans-serif;
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: center;
	margin-top: 18px;
}

ul li {
  background-color: transparent;
	display: inline-block;
}

ul li a {
  text-decoration: none;
	display: block;
	/* background-color: #979777; */
	padding: 5px 8px;
	margin: 5px;
	font-weight: bold;
	word-spacing: 2px;
	letter-spacing: 1px;
	font-size: 110%;
	/* color: #272209; */
  color: #d2d2d2;
	/* border: 3px outset #272709; */
	/* border: 3px outset #d2d2d2; */
	border-radius: 25px;
}

ul li a:visited {
  background-color: transparent;
	/* color: #272209; */
  color: #d2d2d2;
}

/* Credit to Matthew J. Early for the unordered list of links CSS */

a {
  font-weight: bold;
  background-color: transparent;
  /* color: #42b983; */
  color: #d2d2d2;
}

span {
  opacity: 1;
  max-width: 2em;
  /* transition: all 0.5s ease-in-out; */
}

.ghost.hidden {
  opacity: 0;
  max-width: 0;
}

</style>
