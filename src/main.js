// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnime from 'vue-animejs'
import _ from 'lodash'
// import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueAnime)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  data: {
    msg: 'asd',
    scrollPosition: 0,
    active: null,
    lastActive: null,
    activeRoute: null,
    previousRoute: null,
    lastScrollTop: window.pageYOffset || document.documentElement.scrollTop,
    scrollStarted: false,
    changed: false,
    wait: false,
    down: true,
    stopped: true,
    routes: [
      '/',
      '/coding',
      '/qualifications',
      '/demos',
      '/about'
    ]
  },
  mounted () {
    this.active = 0
    this.lastActive = 0
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('wheel', this.handleWheel, true)
  },
  methods: {
    handleWheel (wheelEvent) {
      var threshold = 5
      var variation = parseInt(wheelEvent.deltaY)
      console.log(variation)

      if (this.wait === false) {
        if (variation < -threshold) {
          if (this.active > 1) {
            this.active--
            this.changed = true
          }
        } else if (variation > threshold) {
          if (this.active < 5) {
            this.active++
            this.changed = true
          }
        }
      }

      if (this.changed === true) {
        this.$router.push(this.routes[this.active - 1])
        // VueScrollTo.scrollTo('.section-5', 500, options)

        if (variation < 20 && variation > -20) {
          this.stopped = true
        } else {
          this.stopped = false
        }

        this.changed = false
        this.wait = true
        setTimeout(this.handleTimeout, 3000)
      }
    },
    handleTimeout () {
      // if (this.down) this.active++
      // else this.active--
      // this.scrollStarted = false
      // document.body.style.overflow = 'auto'
      // if (this.stopped) {
        this.wait = false
      // }
    },
    handleScroll (e) {
      let vm = this

      let options = {
        container: 'body',
        easing: 'ease-in',
        offset: 0,
        cancelable: false,
        onStart: function () {
          document.body.style.overflow = 'hidden'
        },
        onDone: _.debounce(function (element) {
          if (vm.down) vm.active++
          else vm.active--
          vm.scrollStarted = false
          console.log('debounce')
          document.body.style.overflow = 'auto'
        }, 100),
        x: false,
        y: true
      }

      let st = window.scrollY

      if (st > this.lastScrollTop) {
        this.down = true
      } else {
        this.down = false
      }

      this.lastScrollTop = st

      if (!this.scrollStarted) {
        if (this.down && this.stopped) {
          this.$router.push(this.routes[this.active])
        } else {
          this.$router.push(this.routes[this.active - 2])
        }

        this.scrollStarted = true
        this.down = true
      }

      // if (this.down) this.active++
      // else this.active--
      // this.scrollStarted = false
      // document.body.style.overflow = 'auto'
      // setTimeout(this.handleTimeout, 250)
      console.log(options)
    }
  },
  template: '<App/>'
})
