<template>

    <div class="contactContainer" @mouseover="mouseOver" @mouseout="mouseOut">
        <span id="b">{{ txt }}</span>
        <Icon :name="nm" :icon="icn" :delay="dly" />
    </div>

</template>

<script>
    import Icon from '../atoms/Icon'

    export default {
        name: 'Contact',
        components: {
            Icon
        },
        props: {
            name: String,
            text: String,
            icon: String,
            delay: Number
        },
        data () {
        return {
            nm: this.name,
            txt: this.text,
            icn: this.icon,
            dly: this.delay
        }
        },
        mounted () {
            const targets = this.$el
            this.$anime
                .timeline().add({
                targets,
                translateY: [-5, 0],
                opacity: [0.1, 1],
                duration: 2000,
                delay: this.delay
                })
                // .add({
                //   targets,
                //   rotate: '1turn',
                //   translateY: 0,
                //   duration: 2000,
                //   delay: this.delay + 500
                // })
        },
        methods: {
            mouseOver: function () {
                const targets = this.$el
                this.$anime
                .timeline().add({
                    targets,
                    translateY: [0, -10],
                    duration: 2000,
                    delay: 0
                })
            },
            mouseOut: function () {
                const targets = this.$el
                this.$anime
                .timeline().add({
                    targets,
                    translateY: [-10, 0],
                    duration: 2000,
                    delay: 0
                })
            }
        }
    }

</script>

<style>

.contactbar {
  position: fixed;
  left: 20px;
  bottom: 20px;
  /* width: 0; */
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

ul li {
  white-space: nowrap;
}

li {
  backdrop-filter: blur(4px);
}

ul li span#a{
  position: relative;
  display: inline;
  background-color: transparent;
  /* animation: */
    /* textMoveOut 1s; */
}

ul li:hover span#a{
  /* animation:
    textMoveIn 1s; */
}

ul li span#b{
  position: relative;
  display: none;
  background-color: transparent;
  animation:
    textFadeOut 2s 1s,
    textMoveOut 1s 1s;
}

ul li:hover span#b{
  display: inline;
  animation:
    textFadeIn 2s 1s,
    textMoveIn 1s 1s;
}
</style>
