<template>
  <div class="contactbar">

    <ul id="contacts">
      <li>
        <span id="b">440.667.9751</span>
        <span id="a"><img src="../../assets/phone.svg" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }"></span>
      </li>
      <li>
        <span id="b">e.bitikofer@gmail.com</span>
        <span id="a"><img src="../../assets/e-mail.svg" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }"></span>
      </li>
      <li>
        <span id="b">linkedin.com/in/ericbitikofer/</span>
        <span id="a"><img src="../../assets/linked-in.svg" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }"></span>
      </li>
      <li>
        <span id="b">99 Main Street, Chauncey OH 45719</span>
        <span id="a"><img src="../../assets/address.svg" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }"></span>
      </li>
    </ul>

  </div>
</template>

<script>
import Route from '../atoms/Route'

export default {
  name: 'Contactbar',
  components: {
    Route
  },
  mounted () {
    const targets = this.$el
    this.$anime
      .timeline().add({
        targets,
        translateY: [-5, 0],
        opacity: [0.1, 1],
        // backgroundColor: '#FFF',
        duration: 2000,
        delay: this.delay
      })
  }
}
</script>

<style scoped>

.contactbar {
  position: fixed;
  left: 20px;
  bottom: 20px;
  width: 0;
  /* margin-bottom: 2.5em; */
}

span {
  font-family: CaviarDreams;
}

img {
  height: 16px;
  width: 16px;
  position: relative;
  top: 2px;
}

ul li {
  background-color: transparent;
	display: inline-block;
  text-decoration: none;
	/* display: block; */
	/* background-color: #979777; */
	/* padding: 6px 14px; */
	/* margin: 14px; */
	/* font-weight: bold; */
	/* word-spacing: 2px; */
	/* letter-spacing: 1px; */
	/* font-size: 110%; */
	/* color: #272209; */
  color: #d2d2d2;
	/* border: 3px outset #272709; */
	/* border: 3px outset #d2d2d2; */
	/* border-radius: 25px; */
  white-space: nowrap;
}

li {
  backdrop-filter: blur(4px);
  /* margin: 0 10px; */
}

ul li span#a{
  position: relative;
  display: inline;
  background-color: transparent;
  /* animation: */
    /* textMoveOut 1s; */
}

ul li:hover span#a{
  position: relative;
  display: inline;
  background-color: transparent;
  animation:
    textMoveIn 1s;
}

ul li span#b{
  position: relative;
  display: none;
  background-color: transparent;
  animation:
    textFadeOut 2s,
    textMoveOut 1s;
}

ul li:hover span#b{
  position: relative;
  display: inline;
  background-color: transparent;
  animation:
    textFadeIn 2s,
    textMoveIn 1s;
}

</style>
