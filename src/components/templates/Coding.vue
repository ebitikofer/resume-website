<template>

  <div class="coding">
    <div class="card page-body">

      <Linkslist title="Languages" :links="lnggs" :delay="450" /><br/>
      <Linkslist title="Frameworks/Libraries/APIs" :links="lbs" :delay="850" />

    </div>
  </div>

</template>

<script>

  import Linkslist from '../molecules/Linkslist'

  export default {
    name: 'Coding',
    components: {
      Linkslist
    },
    data () {
      return {
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
</style>
