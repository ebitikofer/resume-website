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
    lastScrollTop: window.pageYOffset || document.documentElement.scrollTop,
    scrollStarted: false,
    changed: false,
    wait: false,
    down: true
  },
  mounted () {
    this.active = 1
    this.lastActive = 1
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('wheel', this.handleWheel, true)
  },
  methods: {
    handleWheel (e) {
      var threshold = 5
      var variation = parseInt(e.deltaY)
      // console.log(e.deltaY);
      console.log(variation)

      if (this.wait === false) {
        if (variation < -threshold) {
          console.log('MouseWheelUp')
          if (this.active > 1) {
            this.active--
            this.changed = true
          }
        } else if (variation > threshold) {
          console.log('MouseWheelDown')
          if (this.active < 5) {
            this.active++
            this.changed = true
          }
        }
      }

      if (this.changed === true) {
        console.log(this.active)
        if (this.active === 1) {
          this.$router.push('/')
          console.log('Intro')
        } else if (this.active === 2) {
          console.log('Code')
          this.$router.push('/coding')
        } else if (this.active === 3) {
          console.log('Qualifiers')
          this.$router.push('/qualifications')
        } else if (this.active === 4) {
          console.log('Demo')
          this.$router.push('/demos')
        } else if (this.active === 5) {
          console.log('About')
          this.$router.push('/about')
          // VueScrollTo.scrollTo('.section-5', 500, options)
        }
        this.changed = false
        this.wait = true
        setTimeout(this.handleTimeout, 1000)
      }
    },
    handleTimeout () {
      // if (this.down) this.active++
      // else this.active--
      // this.scrollStarted = false
      // document.body.style.overflow = 'auto'
      this.wait = false
    },
    handleScroll (e) {
      console.log('Scrolling')
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
        this.scrollStarted = true
        if (this.down) {
          this.down = true
          if (this.active === 1) {
            this.$router.push('/coding')
          } else if (this.active === 2) {
            this.$router.push('/qualifications')
          } else if (this.active === 3) {
            this.$router.push('/demos')
          } else if (this.active === 4) {
            this.$router.push('/about')
            // VueScrollTo.scrollTo('.section-5', 500, options)
          }
        } else {
          if (this.active === 2) {
            this.$router.push('/')
          } else if (this.active === 3) {
            this.$router.push('/coding')
          } else if (this.active === 4) {
            this.$router.push('/qualifications')
          } else if (this.active === 5) {
            this.$router.push('/demos')
          }
        }
      }
      // if (this.down) this.active++
      // else this.active--
      // this.scrollStarted = false
      // document.body.style.overflow = 'auto'
      setTimeout(this.handleTimeout, 250)
      console.log(options)
    }
  },
  template: '<App/>'
})
