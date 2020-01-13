<template>
  <div class="qualifications">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <div class="holder">

      <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Education</h2>
      <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }">
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 600, loop: false }"><Link name="Bachelors of Computer Science" link="https://catalogs.ohio.edu/preview_program.php?catoid=19&poid=4304&returnto=967" /></li><br/><br/>
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }">
          <h3>Ohio University</h3>
        </li>
      </ul>

      <br/>

      <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 850, loop: false }">Skills</h2>
      <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 950, loop: false }">
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1000, loop: false }">
          Ability to grasp new codebases (libraries/frameworks/APIs) rapidly as well as other technichal information
        </li><br/><br/>
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay:1050, loop: false }">
          Familiarity with most operating systems including Linux, Mac/IOS, and Windows
        </li><br/><br/>
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1100, loop: false }">
          Team environment oriented
        </li><br/><br/>
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1150, loop: false }">
          Team Management
        </li><br/><br/>
        <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1200, loop: false }">
          Ability to produce technical documentation
        </li><br/><br/>
      </ul>

    </div>

    <Contactbar />

  </div>
</template>

<script>
import Navbar from '../molecules/Navbar'
import Link from '../atoms/Link'
import Contactbar from '../molecules/Contactbar'

export default {
  name: 'Qualifications',
  components: {
    Navbar,
    Link,
    Contactbar
  },
  data () {
    return {
      msg: 'Qualifications',
      nvs: [
        { name: 'INTRODUCTION', link: '/' },
        { name: 'CODING', link: '/coding' },
        { name: 'DEMOS', link: '/demos' },
        { name: 'ABOUT', link: '/about' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background-color: rgba(255,255,255, 0.25); /* Black w/opacity/see-through */
  position: relative;
  left: 25%;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
}
h1, h2 {
  color: #d2d2d2;
  font-weight: bold;
}
ul {
  color: #d2d2d2;
  list-style-type: none;
  padding: 0;
}
li {
  color: #d2d2d2;
  display: inline-block;
  margin: 0 10px;
}
</style>
