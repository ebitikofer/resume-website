// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnime from 'vue-animejs'
// import _ from 'lodash'
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
    active: 0,
    lastActive: null,
    activeRoute: null,
    previousRoute: null,
    lastScrollTop: window.pageYOffset || document.documentElement.scrollTop,
    scrollStarted: false,
    changed: false,
    wait: false,
    down: true,
    stopped: true,
    trigger: false,
    maxVariation: null,
    routes: [
      '/',
      '/coding',
      '/skills',
      '/demos',
      '/about'
    ]
  },
  mounted () {
    this.active = 0
    this.lastActive = 0

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })

    document.addEventListener('wheel', this.handleWheel, true)
    document.addEventListener('touchend', function () {
      // wait = false
    }, true)
  },
  methods: {
    handleWheel (wheelEvent) {
      var threshold = 5
      var variation = parseInt(wheelEvent.deltaY)
      if (variation > this.maxVariation) {
        this.maxVariation = variation
      }
      this.scrollPosition += wheelEvent.deltaY
      console.log(this.scrollPosition)

      // if (variation < -100 || variation > 100) {
      //   this.trigger = true
      // } else {
      //   this.trigger = false
      // }

      if (this.wait === false && (this.scrollPosition > 10 * this.maxVariation || this.scrollPosition < -10 * this.maxVariation)) {
        if (variation < -threshold) {
          if (this.active > 1) {
            this.active--
            this.changed = true
          }
        } else if (variation > threshold && (this.scrollPosition > 10 * this.maxVariation || this.scrollPosition < -10 * this.maxVariation)) {
          if (this.active < 5) {
            this.active++
            this.changed = true
          }
        }
      }

      if (this.changed === true) {
        this.$router.push(this.routes[this.active - 1])
        // VueScrollTo.scrollTo('.section-5', 500, options)

        if (variation < 1 && variation > -1) {
          this.stopped = true
        } else {
          this.stopped = false
        }

        this.changed = false
        this.wait = true
        this.scrollPosition = 0
        this.maxVariation = 0
        setTimeout(this.handleTimeout, 66)
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
      // this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition)
      // let vm = this

      // let options = {
      //   container: 'body',
      //   easing: 'ease-in',
      //   offset: 0,
      //   cancelable: false,
      //   onStart: function () {
      //     document.body.style.overflow = 'hidden'
      //   },
      //   onDone: _.debounce(function (element) {
      //     if (vm.down) vm.active++
      //     else vm.active--
      //     vm.scrollStarted = false
      //     console.log('debounce')
      //     document.body.style.overflow = 'auto'
      //   }, 100),
      //   x: false,
      //   y: true
      // }

      // let st = window.scrollY

      // console.log(this.trigger)
      // if (st > this.lastScrollTop) {
      //   this.down = true
      // } else {
      //   this.down = false
      // }

      // this.lastScrollTop = st

      // if (!this.scrollStarted) {
      //   if (this.down && this.stopped) {
      //     // if (this.scrollPosition > (this.active * 1000) && this.scrollPosition < ((this.active + 1) * 1000)) {
      //       // this.$router.push(this.routes[this.active])
      //     // }
      //   } else {
      //     // if (this.scrollPosition > (this.active * 1000) && this.scrollPosition < ((this.active + 1) * 1000)) {
      //       // this.$router.push(this.routes[this.active - 2])
      //     // }
      //   }

      //   this.scrollStarted = true
      //   this.down = true
      // }

      // if (this.down) this.active++
      // else this.active--
      // this.scrollStarted = false
      // document.body.style.overflow = 'auto'
      // setTimeout(this.handleTimeout, 250)
      // console.log(options)
    }
  },
  template: '<App/>'
})
