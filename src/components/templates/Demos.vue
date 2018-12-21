<template>
  <div class="demos">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <Linkslist title="Live" :links="lvs" :delay="400" /><br/>

    <Linkslist title="Offline" :links="fflns" :delay="650" />

    <!-- <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="" link="" /></li>
      <br/><br/>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="" link="https://github.com/ebitikofer" /></li>
    </ul> -->

  </div>
</template>
<script>
import Navbar from '../molecules/Navbar'
import Linkslist from '../molecules/Linkslist'

export default {
  name: 'Demos',
  components: {
    Navbar,
    Linkslist
  },
  data () {
    return {
      msg: 'Demos',
      nvs: [
        { name: 'Introduction', link: '/' },
        { name: 'Coding', link: '/coding' },
        { name: 'Qualifictions', link: '/qualifications' },
        { name: 'About', link: '/about' }
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
</style>
