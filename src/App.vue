<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf"  style="height: auto;" class="shadow-2 rounded-borders">
      <q-header reveal elevated style="background-color:#e67d22">
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" to="/"/>
          <q-avatar>
            <img src="https://static.thenounproject.com/png/875730-200.png">
          </q-avatar>

          <q-toolbar-title>
                <div class="row justify-around">
  <div><q-btn color="black" label="About us" to="/about"/></div>
  <div><q-btn color="black" label="Contacts" /></div>
  <div><q-btn color="black" label="View more" to="/viewmore" /></div>
</div>

          </q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>

      <q-footer reveal elevated class="bg-dark text-center text-white">
       <footer class="text-center text-white fixed-bottom" style="background-color: #21081a;">
  <!-- Grid container -->
  <div class="container p-4"></div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">Assorti.com</a>
  </div>
  <!-- Copyright -->
</footer>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <p >
          <router-view/>
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>    <Footer/>

</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
export default {
  name: 'Layout',
  components: {
    Footer
    
  }
}
</script>
