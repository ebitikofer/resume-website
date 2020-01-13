<template>
  <div class="demos">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <div class="holder">

      <Linkslist title="Live" :links="lvs" :delay="400" /><br/>

      <Linkslist title="Offline" :links="fflns" :delay="650" />

      <!-- <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="" link="" /></li>
        <br/><br/>
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="" link="https://github.com/ebitikofer" /></li>
      </ul> -->

    </div>

    <Contactbar />

  </div>
</template>
<script>
import Navbar from '../molecules/Navbar'
import Linkslist from '../molecules/Linkslist'
import Contactbar from '../molecules/Contactbar'

export default {
  name: 'Demos',
  components: {
    Navbar,
    Linkslist,
    Contactbar
  },
  data () {
    return {
      msg: 'Demos',
      nvs: [
        { name: 'INTRODUCTION', link: '/' },
        { name: 'CODING', link: '/coding' },
        { name: 'QUALIFICATIONS', link: '/qualifications' },
        { name: 'ABOUT', link: '/about' }
      ],
      lvs: [
        { name: 'the-craftsman', link: 'https://the-craftsman.firebaseapp.com/' },
        { name: 'game-test', link: 'https://game-test-bed.firebaseapp.com/' },
        { name: 'gadot-test', link: 'https://gadot-test-bed.firebaseapp.com/' }
      ],
      fflns: [
        { name: 'k3b04rd-k!d-ii', link: 'https://github.com/ebitikofer/opengl_primitive_engine' },
        { name: 'github', link: 'https://github.com/ebitikofer' }
      ]
    }
  }
}
</script>

<style scoped>
.holder {
  background-color: rgba(255,255,255, 0.25); /* Black w/opacity/see-through */
  position: relative;
  left: 25%;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
}
</style>
