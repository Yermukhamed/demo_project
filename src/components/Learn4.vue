<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="600px"
    >
      <q-carousel-slide name="first" img-src="https://blog.artsper.com/wp-content/uploads/2021/01/flatfordmilljohnconstable-2-644x522.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title1}}</div>
          <div class="text-subtitle1">{{subtitle1}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="http://4.bp.blogspot.com/-GS6c1WxO-xM/UoeG2ImMStI/AAAAAAAAgog/OIpAvB-ALNw/s1600/Lucas-van-Valckenborch-Flemish-Renaissance-painter-landscape-painting-september.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title2}}</div>
          <div class="text-subtitle1">{{subtitle2}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/09/renaissance-period.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title3}}</div>
          <div class="text-subtitle1">{{subtitle3}}</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="forth" img-src="https://cdn.britannica.com/41/3341-050-825E2B57/The-Creation-of-Adam-ceiling-fresco-Sistine.jpg">
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
    name:'Learn4',
  setup () {
    return {
      slide: ref('first'),
      title1: "Art of Renaissance period",
      title2: "Mona Liza",
      title3: "Peace",
      title4: "Pations",
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