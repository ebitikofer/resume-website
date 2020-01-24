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
    document.addEventListener('DOMContentLoaded', this.startup)

    // document.addEventListener('touchend', function () {
    //   // wait = false
    // }, true)
  },
  methods: {
    startup () {
      document.addEventListener('touchstart', this.handleStart, {passive: true})
      document.addEventListener('touchend', this.handleEnd, {passive: true})
      document.addEventListener('touchcancel', this.handleCancel, {passive: true})
      document.addEventListener('touchmove', this.handleMove, {passive: true})
    },
    handleStart (evt) {
      evt.preventDefault()
      console.log('touchstart.')
      // let el = document.getElementById('canvas')
      // let ctx = el.getContext('2d')
      // let touches = evt.changedTouches
      // for (let i = 0; i < touches.length; i++) {
      //   console.log('touchstart:' + i + '...')
      //   this.ongoingTouches.push(this.copyTouch(touches[i]))
      //   let color = this.colorForTouch(touches[i])
      //   ctx.beginPath()
      //   ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false) // a circle at the start
      //   ctx.fillStyle = color
      //   ctx.fill()
      //   console.log('touchstart:' + i + '.')
      // }
    },
    handleEnd (evt) {
      evt.preventDefault()
      console.log('touchend.')
      this.log('touchend')
      // let el = document.getElementById('canvas')
      // let ctx = el.getContext('2d')
      // let touches = evt.changedTouches
      // for (let i = 0; i < touches.length; i++) {
      //   let color = this.colorForTouch(touches[i])
      //   let idx = this.ongoingTouchIndexById(touches[i].identifier)
      //   if (idx >= 0) {
      //     ctx.lineWidth = 4
      //     ctx.fillStyle = color
      //     ctx.beginPath()
      //     ctx.moveTo(this.ongoingTouches[idx].pageX, this.ongoingTouches[idx].pageY)
      //     ctx.lineTo(touches[i].pageX, touches[i].pageY)
      //     ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8) // and a square at the end
      //     this.ongoingTouches.splice(idx, 1) // remove it; we're done
      //   } else {
      //     console.log('cant figure out which touch to end')
      //   }
      // }
    },
    handleCancel (evt) {
      evt.preventDefault()
      console.log('touchcancel.')
      // let touches = evt.changedTouches
      // for (let i = 0; i < touches.length; i++) {
      //   let idx = this.ongoingTouchIndexById(touches[i].identifier)
      //   this.ongoingTouches.splice(idx, 1) // remove it; we're done
      // }
    },
    handleMove (evt) {
      evt.preventDefault()
      console.log('touchmove.')
      // let el = document.getElementById('canvas')
      // let ctx = el.getContext('2d')
      // let touches = evt.changedTouches
      // for (let i = 0; i < touches.length; i++) {
      //   let color = this.colorForTouch(touches[i])
      //   let idx = this.ongoingTouchIndexById(touches[i].identifier)
      //   if (idx >= 0) {
      //     console.log('continuing touch ' + idx)
      //     ctx.beginPath()
      //     console.log('ctx.moveTo(' + this.ongoingTouches[idx].pageX + ', ' + this.ongoingTouches[idx].pageY + ');')
      //     ctx.moveTo(this.ongoingTouches[idx].pageX, this.ongoingTouches[idx].pageY)
      //     console.log('ctx.lineTo(' + touches[i].pageX + ', ' + touches[i].pageY + ');')
      //     ctx.lineTo(touches[i].pageX, touches[i].pageY)
      //     ctx.lineWidth = 4
      //     ctx.strokeStyle = color
      //     ctx.stroke()
      //     this.ongoingTouches.splice(idx, 1, this.copyTouch(touches[i])) // swap in the new touch record
      //     console.log('.')
      //   } else {
      //     console.log('cant figure out which touch to continue')
      //   }
      // }
    },
    handleWheel (wheelEvent) {
      let threshold = 5
      let variation = parseInt(wheelEvent.deltaY)
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
    },
    colorForTouch (touch) {
      var r = touch.identifier % 16
      var g = Math.floor(touch.identifier / 3) % 16
      var b = Math.floor(touch.identifier / 7) % 16
      r = r.toString(16) // make it a hex digit
      g = g.toString(16) // make it a hex digit
      b = b.toString(16) // make it a hex digit
      var color = '#' + r + g + b
      console.log('color for touch with identifier ' + touch.identifier + ' = ' + color)
      return color
    },
    copyTouch ({ identifier, pageX, pageY }) {
      return { identifier, pageX, pageY }
    },
    ongoingTouchIndexById (idToFind) {
      for (var i = 0; i < this.ongoingTouches.length; i++) {
        var id = this.ongoingTouches[i].identifier
        if (id === idToFind) {
          return i
        }
      }
      return -1 // not found
    },
    log (msg) {
      // var p = document.getElementById('log')
      // p.innerHTML = msg + '\n' + p.innerHTML
    }
  },
  template: '<App/>'
})
