<template>

  <div class="qualifications">
    <div class="card page-body">

      <h2 class="sub-header text-positioning" v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Education</h2>
      <ul v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }">
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 600, loop: false }"><Link name="Bachelors of Computer Science" link="https://catalogs.ohio.edu/preview_program.php?catoid=19&poid=4304&returnto=967" /></li><br/><br/>
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }">
          <h3>Ohio University</h3>
        </li>
      </ul>

      <br/>

      <h2 class="sub-header text-positioning" v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 850, loop: false }">Skills</h2>
      <ul v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 950, loop: false }">
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1000, loop: false }">
          Ability to grasp new codebases (libraries/frameworks/APIs) rapidly as well as other technichal information
        </li><br/><br/>
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay:1050, loop: false }">
          Familiarity with most operating systems including Linux, Mac/IOS, and Windows
        </li><br/><br/>
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1100, loop: false }">
          Team environment oriented
        </li><br/><br/>
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1150, loop: false }">
          Team Management
        </li><br/><br/>
        <li v-anime="{translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1200, loop: false }">
          Ability to produce technical documentation
        </li><br/><br/>
      </ul>

    </div>
  </div>

</template>

<script>

import Link from '../atoms/Link'

  export default {
    name: 'Qualifications',
    components: {
      Link
    }
  }

</script>

<style scoped>
</style>
