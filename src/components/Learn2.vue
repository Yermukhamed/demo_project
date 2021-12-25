<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="600px"
    >
      <q-carousel-slide name="first" img-src="https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/10/web2-am102618-01-the-last-supper-leonardo-da-vinci-1452e280931519-via-wikimedia-commons.jpg?quality=100&strip=all">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title1}}</div>
          <div class="text-subtitle1">{{subtitle1}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://www.gallerytoday.com/upload/stblog/1/27/30/2730large.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title2}}</div>
          <div class="text-subtitle1">{{subtitle2}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://catholictt.org/wp-content/uploads/2017/05/religious.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title3}}</div>
          <div class="text-subtitle1">{{subtitle3}}</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="forth" img-src="https://wallpaperaccess.com/full/555218.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title4}}</div>
          <div class="text-subtitle1">{{subtitle4}}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name:'Learn2',
  setup () {
    return {
      slide: ref('first'),
      title1: "Religious Art",
      title2: "Lasi by Leonardo",
      title3: "Unknown art",
      title4: "Abdir by Koja",
      subtitle1: "It is a subtype of the modern art when painter shares his feelings through drawing expressive details.",
      subtitle2: "Religious art is a first type of the art which was founded when people started pray to God.",
      subtitle3: "Street art is a works of the street freestyle painters. You can view them on the walls of the buildings.",
      subtitle4: "Art of renaissance period known as reborn time of the art, when church let painters to draw.",
      
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>