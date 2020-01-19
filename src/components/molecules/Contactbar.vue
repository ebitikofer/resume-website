<template>

  <div class="contactbar">

    <ul id="contacts">
      <li class="route" v-for="(contactPoint, index) in contactPoints" :key="index">
        <Contact :name="contactPoint.name" :text="contactPoint.text" :icon="contactPoint.icon" :delay="400" />
        <!-- <span id="b">{{ contactPoint.text }}</span>
        <Icon :name="contactPoint.name" :icon="contactPoint.icon" delay="400" /> -->
        <!-- <span id="a"><img :src="contactPoint.icon" v-anime="{ rotate: 360, easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }" /></span> -->
      </li>
    </ul>

  </div>

</template>

<script>
import Contact from '../atoms/Contact'

export default {
  name: 'Contactbar',
  components: {
    Contact
  },
  data () {
    return {
      contactPoints: [
        {
          name: 'Phone',
          text: '440.667.9751',
          icon: require('@/assets/phone.svg')
        },
        {
          name: '',
          text: 'e.bitikofer@gmail.com',
          icon: require('@/assets/e-mail.svg')
        },
        {
          name: '',
          text: 'linkedin.com/in/ericbitikofer/',
          icon: require('@/assets/linked-in.svg')
        },
        {
          name: '',
          text: '33 E Kanawha Ave, Columbus OH 43214',
          icon: require('@/assets/address.svg')
        }
      ]
    }
  },
  mounted () {
    const targets = this.$el
    this.$anime
      .timeline().add({
        targets,
        translateY: [-5, 0],
        opacity: [0.1, 1],
        // backgroundColor: '#FFF',
        duration: 2000,
        delay: this.delay
      })
  },
  methods: {
    mouseOver: function () {
      console.log('mouseover')
    //   for (var i = this.nm.length; i > 0 ; i--) {
    //     var span = "<span class='ghost hidden'>" + this.nm.charAt(i) + "</span>";
    //     this.$refs.linktext.insertAdjacentHTML("afterend", span);
    //   }
    //   for (var i = 1; i < this.nm.length; i++) {
    //     var time = 100 + (i * 50);
    //     setTimeout(this.removeHidden, time, i)
    //   }
    },
    mouseOut: function () {
      console.log('mouseout')
    //   for (var j = this.nm.length; j > 0; j--) {
    //     this.$refs.link.lastElementChild.remove();
    //   }
    }
  }
}
</script>

<style scoped>

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
  /* animation:
    textFadeOut 2s,
    textMoveOut 1s; */
}

ul li:hover span#b{
  display: inline;
  /* animation:
    textFadeIn 2s,
    textMoveIn 1s; */
}

</style>
