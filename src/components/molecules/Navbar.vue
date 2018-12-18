<template>
  <div class="introduction">

    <!-- <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 50, loop: false }">Nav</h2> -->
    <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 50, loop: false }">

      <li v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 100, loop: false }">
        <Routelink :name="nm1" :link="lnk1" />
      </li>

      <li v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 150, loop: false }">
        <Routelink :name="nm2" :link="lnk2" />
      </li>

      <li v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 200, loop: false }">
        <Routelink :name="nm3" :link="lnk3" />
      </li>

      <li v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 250, loop: false }">
        <Routelink :name="nm4" :link="lnk4" />
      </li>

    </ul>

    <br/>

    <h1 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 300, loop: false }">{{ msg }}</h1>

  </div>
</template>

<script>
import Routelink from '../atoms/Routelink'

export default {
  name: 'Introduction',
  props: ['message', 'name1', 'link1', 'name2', 'link2', 'name3', 'link3', 'name4', 'link4'],
  components: {
    Routelink
  },
  data () {
    return {
      msg: this.message,
      nm1: this.name1,
      lnk1: this.link1,
      nm2: this.name2,
      lnk2: this.link2,
      nm3: this.name3,
      lnk3: this.link3,
      nm4: this.name4,
      lnk4: this.link4
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
