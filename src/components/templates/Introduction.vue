<template>
  <div class="introduction">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <div class="holder">

      <!-- <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Intro</h2> -->
      <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }">Gui programming, human interface and interaction, immersion, art, animation and lots of other programming</p><br/>

      <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">Contact</h2>
      <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }">440-667-9751 · e.bitikofer@gmail.com</p>
      <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }"> · linkedin.com/in/ericbitikofer/ · </p>
      <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }"> · 99 Main Street, Chauncey OH 45719 · </p>

    </div>

    <Contactbar />

  </div>
</template>

<script>
import Navbar from '../molecules/Navbar'
import Textsection from '../molecules/Textsection'
import Contactbar from '../molecules/Contactbar'

export default {
  name: 'Introduction',
  components: {
    Navbar,
    Textsection,
    Contactbar
  },
  data () {
    return {
      msg: 'Eric\nBitikofer',
      nvs: [
        { name: 'CODING', link: '/coding' },
        { name: 'QUALIFICATIONS', link: '/qualifications' },
        { name: 'DEMOS', link: '/demos' },
        { name: 'ABOUT', link: '/about' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: CaviarDreams;
  src: url(/assets/CaviarDreams.ttf) format('truetype');
}
@font-face {
  font-family: CaviarDreams;
  font-weight: bold;
  src: url(/assets/CaviarDreams_Bold.ttf) format('truetype');
}
@font-face {
  font-family: LemonMilk;
  src: url(/assets/LemonMilk.otf) format('opentype');
}
@font-face {
  font-family: LemonMilk;
  font-weight: bold;
  src: url(/assets/LemonMilkbold.otf) format('opentype');
}
.introduction {
  height: 100%;
}
.holder {
  background-color: rgba(255,255,255, 0.25); /* Black w/opacity/see-through */
  position: relative;
  left: 25%;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
}
h1, h2 {
  font-family: LemonMilk;
  font-weight: bold;
  color: white;
  position: relative;
  left: 25%;
  width: 50%;
  background-color: transparent;
}
p {
  font-family: CaviarDreams;
  color: white;
  background-color: transparent;
  position: relative;
  left: 25%;
  width: 50%;
}
</style>
