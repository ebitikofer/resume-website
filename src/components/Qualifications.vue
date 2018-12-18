<template>
  <div class="qualifications">

    <Navbar :message="msg"
      name1="Introduction" link1="/"
      name2="Coding" link2="/coding"
      name3="Demos" link3="/demos"
      name4="About" link4="/about"
    />

    <br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Education</h2>
    <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }">
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 600, loop: false }"><Link name="Bachelors of Computer Science" link="https://catalogs.ohio.edu/preview_program.php?catoid=19&poid=4304&returnto=967" /></li><br/>
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
</template>

<script>
import Navbar from './molecules/Navbar'
import Link from './atoms/Link'

export default {
  name: 'Qualifications',
  components: {
    Navbar,
    Link
  },
  data () {
    return {
      msg: 'Qualifications'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
