<template>
  <div class="link">
    <a :href="lnk" target="_blank">{{ nm }}</a>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: ['name', 'link'],
  data () {
    return {
      nm: this.name,
      lnk: this.link
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
