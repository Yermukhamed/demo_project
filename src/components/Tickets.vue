<template>
  <div class="q-pa-lg" style="max-width: 400px;margin-left:auto;margin-right:auto;margin-top:auto;margin-down:auto">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the rules of the ordering" />

      <div>
        <q-btn label="Submit" type="submit" color="dark"/>
        <q-btn label="Reset" type="reset" color="dark" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://m.media-amazon.com/images/I/71BsdN7QhzL._AC_SL1000_.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    <q-carousel-slide :name="5" img-src="https://m.media-amazon.com/images/I/81QN4tCofML._AC_SY450_.jpg" />
        <q-carousel-slide :name="6" img-src="https://i1.wp.com/www.hisour.com/wp-content/uploads/2017/03/MoMA-The-Museum-of-Modern-Art.jpg?fit=910%2C720&ssl=1&resize=1280%2C720" />
        <q-carousel-slide :name="7" img-src="https://image.posterlounge.com/img/products/630000/628493/628493_poster_l.jpg" />


    </q-carousel>
  </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
    name: 'Tickets',

  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,
      slide: ref(1),

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>