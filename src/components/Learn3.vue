<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="600px"
    >
      <q-carousel-slide name="first" img-src="https://www.streetartbio.com/wp-content/uploads/2020/05/IMG_8546.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title1}}</div>
          <div class="text-subtitle1">{{subtitle1}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/paris-attitude-street-art-%7C-630x405-%7C-%C2%A9-antoine-buchet/21958572-1-fre-FR/Paris-Attitude-street-art-%7C-630x405-%7C-%C2%A9-Antoine-Buchet.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title2}}</div>
          <div class="text-subtitle1">{{subtitle2}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://www.streetartbio.com/wp-content/uploads/2020/05/IMG_8546.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title3}}</div>
          <div class="text-subtitle1">{{subtitle3}}</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="forth" img-src="https://res.cloudinary.com/hzwebux5t/image/upload/c_fill,dpr_2.0,f_auto,g_auto,h_360,w_500/v1568673824/fohbalrao8tgb5t2ezgh.jpg">
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
    name:'Learn3',
  setup () {
    return {
      slide: ref('first'),
      title1: "Street Art",
      title2: "Joke by Fale",
      title3: "Pations by Faered",
      title4: "Suiyts by Koja",
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