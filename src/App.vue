<template>

  <div id="app">
    <Navbar class="top" v-bind:message="msg" v-bind:routes="nvs" :delay="450" />
    <router-view class="middle" />
    <Contactbar class="middle" />
  </div>

</template>

<script>

  import Navbar from './components/molecules/Navbar'
  import Contactbar from './components/molecules/Contactbar'

    export default {
      name: 'App',
      components: {
        Navbar,
        Contactbar
      },
      data () {
        let originalMsg = ''
        // if (this.$route.name === 'Intro') {
        //   originalMsg = 'Eric\nBitikofer'
        // } else {
          originalMsg = this.$route.name
        // }
        return {
          // msg: 'Eric\nBitikofer',
          // msg: titleMsg,
          msg: originalMsg,
          nvs: [
            { name: 'INTRO', link: '/' },
            { name: 'CODING', link: '/coding' },
            { name: 'SKILLS', link: '/skills' },
            { name: 'DEMOS', link: '/demos' },
            { name: 'ABOUT', link: '/about' }
          ]
        }
      },
      watch: {
        $route (to, from) {
          // if (this.$route.name === 'Intro') {
          //   this.msg = 'Eric\nBitikofer'
          // } else {
            this.msg = this.$route.name
          // }
          // console.log('current route', this.msg)
          this.nvs = [
            { name: 'INTRO', link: '/' },
            { name: 'CODING', link: '/coding' },
            { name: 'SKILLS', link: '/skills' },
            { name: 'DEMOS', link: '/demos' },
            { name: 'ABOUT', link: '/about' }
          ]
        }
      }
    }

</script>

<style>

  ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
  }

  body, html {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  body {
    background: white url("assets/Infant_Stars_in_Orion.png") no-repeat fixed center;
    background-size: cover;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* overflow: scroll; */
    /* overflow-x: hidden; */
  }

  div {
    width: inherit;
  }

  ul {
    background-color: transparent;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }

  li {
    display: inline-block;
    background-color: transparent;
    /* backdrop-filter: blur(4px); */
    color: white;
  }

  ul li a {
    text-decoration: none;
    display: block;
    background-color: transparent;
    color: white;
  }

  #app {
    /* background-color: #2c3e50; */
    height: 100%;
  }

  .top {
    z-index: 50 !important;
  }

  .middle {
    z-index: 0 !important;
  }

  .card {
    background-color: rgba(255,255,255, 0.25); /* Black w/opacity/see-through */
    border-radius: 15px;
    padding: 20px;
  }

  .center-card {
    position: relative;
    margin: 0px auto;
    width: 50vw;
    text-align: center;
  }

  .page-body {
    height: calc(100vh - 140px - 40px - 40px - 45.6px); /* calc(viewport height - 140px - contacts - navbar - header text) */
    height: calc(calc(var(--vh, 1vh) * 100) - 140px - 40px - 40px - 45.6px); /* calc(viewport height - 140px - contacts - navbar - header text) */
    overflow-y: auto;
  }

  .about-page-body {
    height: calc(100vh - 140px - 40px - 40px - 45.6px - 297px); /* calc(viewport height - 140px - contacts - navbar - header text - shapeshifter) */
    height: calc(calc(var(--vh, 1vh) * 100) - 140px - 40px - 40px - 45.6px - 297px); /* calc(viewport height - 140px - contacts - navbar - header text - shapeshifter) */
  }

  @media screen and (max-width: 991px) {
    .page-body {
      height: calc(100vh - 140px - 40px - 90px - 45.6px); /* calc(viewport height - 140px - contacts - navbar - header text) */
      height: calc(calc(var(--vh, 1vh) * 100) - 140px - 40px - 90px - 45.6px); /* calc(viewport height - 140px - contacts - navbar - header text) */
      overflow-y: auto;
    }

    .about-page-body {
      height: calc(100vh - 140px - 40px - 90px - 45.6px - 150px); /* calc(viewport height - 140px - contacts - navbar - header text - shapeshifter) */
      height: calc(calc(var(--vh, 1vh) * 100) - 140px - 40px - 90px - 45.6px - 150px); /* calc(viewport height - 140px - contacts - navbar - header text - shapeshifter) */
    }
  }

  .text {
    background-color: transparent;
  }

  .header {
    font-family: LemonMilk;
    font-weight: bold;
    color: white;
  }

  .sub-header {
    font-family: 'GlacialIndifference';
    font-weight: bold;
    color: white;
  }

  .accent-text {
    font-family: CaviarDreams;
    font-weight: bold;
    color: white;
  }

  .accent-link {
    font-family: CaviarDreams;
    font-weight: bold;
    color: #42b983;
  }

  .accent-link:hover {
    color: #76e6b3;
  }

  .body-text {
    font-family: CaviarDreams;
    color: white;
  }

  .route-link {
    font-size: 110%;
    word-spacing: 2px;
    letter-spacing: 1px;
  }

  .route-link:hover {
    color: #76e6b3;
  }

  .current-route-link {
    color: #42b983;
  }

  .text-positioning {
    background-color: transparent;
    position: relative;
    /* left: 25%; */
    width: 100%;
    margin: 0px;
  }

  .text-spacing {
    margin-bottom: 20px
  }

  @keyframes textFadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes textFadeOut {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes textMoveIn {
    0%   { left: -85%; }
    100% { left: 0%; }
  }

  @keyframes textMoveOut {
    0%   { left: 0%; }
    100% { left: -85%; }
  }

  @font-face {
    font-family: CaviarDreams;
    src: url(./assets/CaviarDreams.ttf) format('truetype');
  }

  @font-face {
    font-family: CaviarDreams;
    font-weight: bold;
    src: url(./assets/CaviarDreams_Bold.ttf) format('truetype');
  }

  @font-face {
    font-family: LemonMilk;
    src: url(./assets/LemonMilk.otf) format('opentype');
  }

  @font-face {
    font-family: LemonMilk;
    font-weight: bold;
    src: url(./assets/LemonMilkbold.otf) format('opentype');
  }

  @font-face {
    font-family: GlacialIndifference;
    src: url(./assets/GlacialIndifference.otf) format('opentype');
  }

  @font-face {
    font-family: GlacialIndifference;
    font-weight: bold;
    src: url(./assets/GlacialIndifference_Bold.otf) format('opentype');
  }

</style>
