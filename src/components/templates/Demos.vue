<template>

  <div class="demosPage">

    <!-- <Card :delay="startVal"></Card> -->

    <Card :delay="startVal">
      <Linkslist title="Live" :links="lvs" :delay="startVal + 50" /><br/>
      <Linkslist title="Offline" :links="fflns" :delay="startVal + 200" />
    </Card>

    <!-- <Card :delay="startVal"></Card> -->

  </div>

</template>

<script>

  import Card from '../atoms/Card'
  import Linkslist from '../molecules/Linkslist'

  export default {
    name: 'Demos',
    components: {
      Card,
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
        ],
        startVal: 1000
      }
    }
  }

</script>

<style scoped>
</style>
