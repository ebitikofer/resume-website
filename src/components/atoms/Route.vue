<template>
  <div class="route">
    <router-link :to="rt"><span id="a">{{ nm.charAt(0) }}</span><span id="b">{{ nm }}</span></router-link>
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
  text-decoration: none;
	display: block;
	/* background-color: #979777; */
	padding: 6px 14px;
	margin: 14px;
	font-weight: bold;
	word-spacing: 2px;
	letter-spacing: 1px;
	font-size: 110%;
	/* color: #272209; */
  color: #d2d2d2;
	/* border: 3px outset #272709; */
	border: 3px outset #d2d2d2;
	border-radius: 25px;
}

ul li a:visited {
  background-color: transparent;
	/* color: #272209; */
  color: #d2d2d2;
}

ul li a span#a{
  display: inline;
  background-color: transparent;
}

ul li a:hover span#a{
  display: none;
  background-color: transparent;
}

ul li a span#b{
  display: none;
  background-color: transparent;
}

ul li a:hover span#b{
  display: inline;
  background-color: transparent;
}

/* Credit to Matthew J. Early for the unordered list of links CSS */

a {
  font-weight: bold;
  background-color: transparent;
  /* color: #42b983; */
  color: #d2d2d2;
}

</style>
