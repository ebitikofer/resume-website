<template>
  <div class="link">
    <a :href="lnk" target="_blank">{{ nm }}</a>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: {
    name: String,
    link: String,
    delay: Number
  },
  data () {
    return {
      nm: this.name,
      lnk: this.link,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ul {
	font-family: 'Verdana', 'Geneva', 'Tahoma', sans-serif;
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: center;
	margin-top: 18px;
}

ul li {
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
	color: #272209;
}

ul li a:hover {
	border: 3px inset #372759;
	color: #000000;
} */

/* Credit to Matthew J. Early for the unordered list of links CSS */

a {
  font-weight: bold;
  background-color: transparent;
  color: #42b983;
}
</style>
