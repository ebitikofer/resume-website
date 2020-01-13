<template>
  <div class="introduction">

    <Navbar :message="msg" :routes="nvs" :delay="0" />

    <div class="card page-body">

      <!-- <h2 v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Intro</h2> -->
      <p v-anime="introduction.animation">{{ introduction.text }}</p><br/>

      <h2 v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">Contact</h2>

      <p
        v-for="(contact, index) in contacts"
        v-anime="contact.animation"
        v-bind:key="index"
      >
        {{ contact.line }}
      </p>

    </div>

  </div>
</template>

<script>
import Navbar from '../molecules/Navbar'
import Textsection from '../molecules/Textsection'

export default {
  name: 'Introduction',
  components: {
    Navbar,
    Textsection
  },
  data () {
    return {
      msg: 'Eric\nBitikofer',
      nvs: [
        { name: 'CODING', link: '/coding' },
        { name: 'QUALIFICATIONS', link: '/qualifications' },
        { name: 'DEMOS', link: '/demos' },
        { name: 'ABOUT', link: '/about' }
      ],
      introduction: {
        text: 'UX/UI programming, human interface design and interaction, art, animation and lots of other programming',
        animation: { translateY: [-5, 0], opacity: [0.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }
      },
      contacts: [
        {
          line: '440-667-9751 · e.bitikofer@gmail.com',
          animation: { translateY: [-5, 0], opacity: [0.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }
        },
        {
          line: ' · linkedin.com/in/ericbitikofer/ · ',
          animation: { translateY: [-5, 0], opacity: [0.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }
        },
        {
          line: ' · 99 Main Street, Chauncey OH 45719 · ',
          animation: { translateY: [-5, 0], opacity: [0.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 600, loop: false }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.introduction {
  height: 100%;
}

h1, h2 {
  font-family: LemonMilk;
  font-weight: bold;
  color: white;
  position: relative;
  left: 25%;
  width: 50%;
}

</style>
