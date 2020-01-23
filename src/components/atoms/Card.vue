<template>

    <div class="cardContainer">
        <!-- <div class="card page-body" @mouseover="mouseOver" @mouseout="mouseOut"> -->
        <div class="card center-card" v-bind:class="{ 'page-body': !hdr, 'about-page-body': abt }">
            <slot></slot>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'Card',
        props: {
            header: {
                default: false,
                type: Boolean
            },
            about: {
                default: false,
                type: Boolean
            },
            delay: Number,
            mountAnimation: Object,
            unmountAnimation: Object,
            hoverAnimation: Object,
            unhoverAnimation: Object
        },
        data () {
            return {
                hdr: this.header,
                abt: this.about,
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
        },
        beforeDestroy () {
            const targets = this.$el
            this.$anime
                .timeline().add({
                targets,
                translateY: [0, -5],
                opacity: [1, 0.1],
                duration: 0,
                delay: 0
                })
        },
        mouseOver: function () {
            // const targets = this.$el
            // this.$anime
            //     .timeline().add({
            //     targets,
            //     backgroundColor: '#76e6b3',
            //     duration: 2000,
            //     delay: 0
            //     })
        },
        mouseOut: function () {
            // const targets = this.$el
            // this.$anime
            //     .timeline().add({
            //     targets,
            //     backgroundColor: 'white',
            //     duration: 2000,
            //     delay: 0
            //     })
        }
    }

</script>

<style scoped>

    .cardContainer {
        padding-top: 20px;
    }

</style>
