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

  @import './assets/css/variables.css';
  @import './assets/css/fonts.css';
  @import './assets/css/animations.css';

  body, html {
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
  }

  body {
      background: white url("./assets/Infant_Stars_in_Orion.png") no-repeat fixed center;
      background-size: cover;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      /* color: #2c3e50; */
      /* overflow: scroll; */
      /* overflow-x: hidden; */
  }

  div {
      width: inherit;
      /* backdrop-filter: blur(4px); */
  }

  ul {
      background-color: transparent;
      /* backdrop-filter: blur(4px); */
      padding: 0px;
      margin: 0px;
      list-style-type: none;
  }

  li {
      display: inline-block;
      background-color: transparent;
      /* backdrop-filter: blur(4px); */
  }

  span {
    font-family: CaviarDreams;
  }

  img {
    height: 16px;
    width: 16px;
    position: relative;
    top: 2px;
  }

  a {
      background-color: transparent;
      color: var(--main-text);
      text-decoration: none;
  }

  ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
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
    background-color: rgba(255,255,255, 0.25); /* Black w/ opacity  see-through */
    border-radius: 15px;
    padding: var(--card-padding);
  }

  .center-card {
    position: relative;
    margin: 0px auto;
    width: 50vw;
    text-align: center;
  }

  .page-body {
    height: var(--page-body);
    height: var(--page-body-custom);
    overflow-y: auto;
  }

  .about-page-body {
    height: calc( var(--page-body) - var(--shapeshifter) );
    height: calc( var(--page-body-custom) - var(--shapeshifter) );
  }

  @media screen and (max-width: 991px) {
    .about-page-body {
      height: calc( var(--page-body) - var(--shapeshifter-mobile) );
      height: calc( var(--page-body-custom) - var(--shapeshifter-mobile) );
    }
  }

  .text {
    background-color: transparent;
  }

  .header {
    font-family: LemonMilk;
    font-weight: bold;
    color: var(--main-text);
  }

  .sub-header {
    font-family: 'GlacialIndifference';
    font-weight: bold;
    color: var(--main-text);
  }

  .accent-text {
    font-family: CaviarDreams;
    font-weight: bold;
    color: var(--main-text);
  }

  .accent-link {
    font-family: CaviarDreams;
    font-weight: bold;
    color: var(--accent-color);
  }

  .accent-link:hover {
    color: var(--accent-color-variant);
  }

  .body-text {
    font-family: CaviarDreams;
    color: var(--main-text);
  }

  .route-link {
    font-size: 110%;
    word-spacing: 2px;
    letter-spacing: 1px;
    line-height: 0.9;
  }

  .route-link:hover {
    color: var(--accent-color-variant);
  }

  .current-route-link {
    color: var(--accent-color);
  }

  .text-positioning {
    background-color: transparent;
    position: relative;
    /* left: 25%; */
    width: 100%;
    margin: 0px;
  }

  .text-spacing {
    margin-bottom: var(--standard-spacing);
  }

</style>
