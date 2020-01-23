<template>

  <div class="introPage">

    <!-- <Card :delay="startVal"></Card> -->

    <Card :delay="startVal">
      <Textblock :text="intro" :delay="startVal + 50" />
      <Title title="Contact" :delay="startVal + 100" />
      <Textblock
        v-for="(contact, index) in contacts" v-bind:key="index"
        :text="contact" :delay="startVal + 150 + (50 * index)"
      />
    </Card>

    <!-- <Card :delay="startVal"></Card> -->

  </div>

</template>

<script>

  import Card from '../atoms/Card'
  import Title from '../atoms/Title'
  import Textblock from '../atoms/Textblock'

  export default {
    name: 'Intro',
    components: {
      Card,
      Title,
      Textblock
    },
    data () {
      return {
        intro: 'UX/UI programming, human interface design and interaction, art, animation and lots of other programming',
        contacts: [
          '440-667-9751 · e.bitikofer@gmail.com',
          ' · linkedin.com/in/ericbitikofer/ · ',
          ' · 99 Main Street, Chauncey OH 45719 · '
        ],
        startVal: 500
      }
    }
  }

</script>

<style scoped>

  .introPage {
    /* height: 100%; */
  }

</style>
