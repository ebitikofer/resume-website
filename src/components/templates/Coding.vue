<template>
  <div class="coding">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <div class="holder">

      <Linkslist title="Languages" :links="lnggs" :delay="450" /><br/>

      <Linkslist title="Frameworks/Libraries/APIs" :links="lbs" :delay="850" />

    </div>

    <Contactbar />

  </div>
</template>

<script>
import Navbar from '../molecules/Navbar'
import Linkslist from '../molecules/Linkslist'
import Contactbar from '../molecules/Contactbar'

export default {
  name: 'Coding',
  components: {
    Navbar,
    Linkslist,
    Contactbar
  },
  data () {
    return {
      msg: 'Coding',
      nvs: [
        { name: 'INTRODUCTION', link: '/' },
        { name: 'QUALIFICATIONS', link: '/qualifications' },
        { name: 'DEMOS', link: '/demos' },
        { name: 'ABOUT', link: '/about' }
      ],
      lnggs: [
        { name: 'C++', link: 'https://isocpp.org/' },
        { name: 'JavaScript', link: 'https://www.javascript.com/' },
        { name: 'Python', link: 'https://www.python.org/' },
        { name: 'Java', link: 'https://www.oracle.com/java/' },
        { name: 'C#', link: 'https://docs.microsoft.com/en-us/dotnet/csharp/' }
      ],
      lbs: [
        { name: 'VueJS', link: 'https://vuejs.org/' },
        { name: 'AnimeJS', link: 'http://animejs.com/' },
        { name: 'BabylonJS', link: 'https://www.babylonjs.com/' },
        { name: 'ReactJS', link: 'https://reactjs.org/' },
        { name: 'ReactRouter', link: 'https://reacttraining.com/react-router/' },
        { name: 'Redux', link: 'https://redux.js.org/' },
        { name: 'Django', link: 'https://www.djangoproject.com/' },
        { name: 'OpenGL', link: 'https://www.khronos.org/opengl/' },
        { name: 'WebGL', link: 'https://www.khronos.org/webgl/' }
      ]
    }
  }
}
</script>

<style scoped>
.holder {
  background-color: rgba(255,255,255, 0.25); /* Black w/opacity/see-through */
  position: relative;
  left: 25%;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
}
</style>
