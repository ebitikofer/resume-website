<template>
  <div class="about">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <!-- <img src="../../assets/face.svg" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }"> -->

    <div class="shapeshifter" ></div>

    <Textsection header="Bio" text="I have been programming since age 14 and MySpace" :delay="450" /><br/>

    <Textsection header="Interests" text="Programming, Hardware, Drumming, Art, Plants" :delay="550" />

  </div>
</template>

<script>
import Navbar from '../molecules/Navbar'
import Textsection from '../molecules/Textsection'

export default {
  name: 'About',
  components: {
    Navbar,
    Textsection
  },
  data () {
    return {
      msg: 'About',
      nvs: [
        { name: 'Introduction', link: '/' },
        { name: 'Coding', link: '/coding' },
        { name: 'Qualifictions', link: '/qualifications' },
        { name: 'Demos', link: '/demos' }
      ]
    }
  }
}
</script>

<style scoped>

img {
  width: 200px;
  /* height: 200px; */
}

@keyframes play150 {
  0% { background-position: 0px 0px; }
  100% { background-position: -31500px 0px; }
}

.shapeshifter {
  position: relative;
  margin: auto;
  animation-name: play150;
  animation-duration: 5000ms;
  animation-timing-function: steps(150);
  background-image: url(../../assets/face.svg);
  background-position: -31500px 0px;
   /* background-size: 100% 100%; */
  width: 210px;
  height: 297px;
  background-repeat: no-repeat;
}

</style>
