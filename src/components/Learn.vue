<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="600px"
    >
      <q-carousel-slide name="first" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWxVN2-j4VjBjMO5EBYwpatF6DEPPUQxK3g&usqp=CAU">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title1}}</div>
          <div class="text-subtitle1">{{subtitle1}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://ctl.s6img.com/society6/img/RYZ4xdath0_4H0JDl1d4cEvssSs/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/d8c91916396b47b0a6907bacc989863b/~~/virgin-mary-painting-madonna-and-child-jesus-icon-modern-catholic-religious-prints.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title2}}</div>
          <div class="text-subtitle1">{{subtitle2}}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://www.gannett-cdn.com/-mm-/785e1ab20ca30e993b583a759e5be8b17e2a825b/c=0-248-1969-1360/local/-/media/2016/03/31/USATODAY/USATODAY/635950278564737057-LA-ArtsDist-20-Credit-Matt-Marriott-Discover-LA-rs.jpg?width=1600&height=800&fit=crop&format=pjpg&auto=webp">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{title3}}</div>
          <div class="text-subtitle1">{{subtitle3}}</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="forth" img-src="https://cdn.britannica.com/39/939-050-070AB8C7/Lamentation-Giotto-Padua-Italy-Arena-Chapel.jpg">
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
    name:'Learn',
  setup () {
    return {
      slide: ref('first'),
      title1: "Contemporary Art",
      title2: "Loco by Yeju",
      title3: "Rock by Luik",
      title4: "Zoro by Uki",
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