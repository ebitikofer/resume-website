<template>
  <div class="about">

    <Navbar :message="msg" :routes="nvs" :delay = "0" />

    <!-- <img src="../../assets/face.svg" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }"> -->

    <div class="shapeshifter" ></div>

    <div class="card page-body">

      <Textsection header="Bio" text="The things that drive me are technology music, art, and nature. Growing up in the family that I did, working with code and hardware was a given. Ever since I can remember my father and brother were making things, taking things apart, and putting the back together in different ways. So to even be able to keep up in conversation I constantly had to be learning. I started programming when I was about fourteen, creating div layouts for my myspace profile because I had to have the most custom profile out of my friends. As for learning about hardware, I started messing with making basic circuits in high school and throughout college I've made many basic systems from an electric drum kit to a small window side garden that lets you know when it needs to be watered. Music, art, and nature also have been an integral part of my life since I was child as well. My father graduated with a degree in Fine Arts and Music and my mother in Botany so these subjects were inescapable. I remember as a child always learning about music and plants on every car ride I took with my parents but that contributed to my abilty to keep a garden and play instruments in my daily life. Art was the hobby that I took on myself in my high school. I couldn't resist the opportunity to express the way I saw the world in a visual format, so any chance I got, I would paint a painting or a mural at school. These days I don't paint as many paintings but I find an outlet in digital media when I can." :delay="450" /><br/>

      <Textsection header="Interests" text="Programming, Electrical Engineering, Drumming, Art, Plants" :delay="550" />

    </div>

  </div>
</template>

<script>
import Navbar from '../molecules/Navbar'
import Textsection from '../molecules/Textsection'

export default {
  name: 'About',
  components: {
    Navbar,
    Textsection
  },
  data () {
    return {
      msg: 'About',
      nvs: [
        { name: 'INTRODUCTION', link: '/' },
        { name: 'CODING', link: '/coding' },
        { name: 'QUALIFICATIONS', link: '/qualifications' },
        { name: 'DEMOS', link: '/demos' }
      ]
    }
  }
}
</script>

<style scoped>

img {
  width: 200px;
  /* height: 200px; */
}

@keyframes play150 {
  0% { background-position: 0px 0px; }
  100% { background-position: -31500px 0px; }
}

.shapeshifter {
  position: relative;
  margin: auto;
  animation-name: play150;
  animation-duration: 5000ms;
  animation-timing-function: steps(150);
  background-image: url(../../assets/face.svg);
  background-position: -31500px 0px;
   /* background-size: 100% 100%; */
  width: 210px;
  height: 297px;
  background-repeat: no-repeat;
}

</style>
