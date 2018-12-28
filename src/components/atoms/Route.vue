<template>
  <div class="route">
    <router-link :to="rt">{{ nm }}</router-link>
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
      }).add({
        targets,
        rotate: '1turn',
        translateY: 5,
        duration: 2000,
        delay: this.delay + 500
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  background-color: transparent;
	font-family: 'Verdana', 'Geneva', 'Tahoma', sans-serif;
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
	display: block;
	background-color: #979777;
	padding: 6px 14px;
	margin: 14px;
	font-weight: bold;
	word-spacing: 2px;
	letter-spacing: 1px;
	font-size: 110%;
	color: #272209;
	border: 3px outset #272709;
	border-radius: 25px;
}

ul li a:visited {
  background-color: transparent;
	color: #272209;
}

ul li a:hover {
  background-color: transparent;
  backdrop-filter: blur(1px);
	border: 3px inset #372759;
	color: #000000;
}

/* Credit to Matthew J. Early for the unordered list of links CSS */

a {
  font-weight: bold;
  background-color: transparent;
  color: #42b983;
}
</style>
