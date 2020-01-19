<template>

  <div class="introduction">
    <div class="card page-body">

      <p class="text body-text text-positioning" v-anime="introduction.animation">{{ introduction.text }}</p>
      <h2 class="sub-header text-positioning" v-anime="{ translateY: [-5, 0], opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">Contact</h2>
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

  import Textsection from '../molecules/Textsection'

  export default {
    name: 'Introduction',
    components: {
      Textsection
    },
    data () {
      return {
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

<style scoped>

.introduction {
  /* height: 100%; */
}

</style>
