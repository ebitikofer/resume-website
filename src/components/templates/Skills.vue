<template>

  <div class="skillsPage">

    <!-- <Card :delay="startVal"></Card> -->

    <Card :delay="startVal">

      <h2 class="sub-header text-positioning text-spacing" v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: startVal + 50, loop: false }">Education</h2>
      <ul v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: startVal + 100, loop: false }">
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: startVal + 150, loop: false }"><Link name="Bachelors of Computer Science" link="https://catalogs.ohio.edu/preview_program.php?catoid=19&poid=4304&returnto=967" /></li><br/><br/>
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: startVal + 200, loop: false }">
          <h3>Ohio University</h3>
        </li>
      </ul>

      <Textlist title="Skills" :texts="skills" :delay="startVal + 250"/>
    </Card>

    <!-- <Card :delay="startVal"></Card> -->

  </div>

</template>

<script>

  import Card from '../atoms/Card'
  import Textlist from '../molecules/Textlist'
  import Link from '../atoms/Link'

    export default {
      name: 'Skills',
      components: {
        Card,
        Textlist,
        Link
      },
      data () {
        return {
          skills: [
            'Ability to grasp new codebases (libraries/frameworks/APIs) rapidly as well as other technichal information',
            'Familiarity with most operating systems including Linux, Mac/IOS, and Windows',
            'Team environment oriented',
            'Team Management',
            'Ability to produce technical documentation'
          ],
          startVal: 500
        }
      }
    }

</script>

<style scoped>
</style>
