<template>

  <div class="demos">
    <div class="card page-body">

      <Linkslist title="Live" :links="lvs" :delay="400" /><br/>
      <Linkslist title="Offline" :links="fflns" :delay="650" />

      <!-- <ul v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="" link="" /></li>
        <br/><br/>
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="" link="https://github.com/ebitikofer" /></li>
      </ul> -->

    </div>
  </div>

</template>

<script>

  import Linkslist from '../molecules/Linkslist'

  export default {
    name: 'Demos',
    components: {
      Linkslist
    },
    data () {
      return {
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
