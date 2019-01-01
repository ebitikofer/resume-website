<template>
  <div class="about">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <img src="../../assets/face.svg" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }">

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

</style>
