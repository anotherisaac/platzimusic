<template lang="pug">
 #app
  pm-header
  section.section
    nav.nav.has-shadow
      .container
        input.input.is-large(
          type="text",
          placeholder="Buscar canciones",
          v-model="searchQuery")
        a.button.is-info.is-large(@click="search") Buscar
        a.button.is-danger.is-large &times;
    .container
      p 
        small {{searchMessage}} 
    .container.results
      .columns
        .column(v-for="t in tracks") 
          | {{t.name}} - {{t.artists[0].name}}
  pm-footer
        
        
        



    

</template>

<script>
import trackService from './services/track'
import pmFooter from './components/layout/Footer.vue'
import pmHeader from './components/layout/Header.vue'
export default {
  name: 'app',
  components: {pmFooter,pmHeader},
  data () {
    return {
      searchQuery: '',
      tracks: [],
      
    }
  },

  methods: {
    search() {
     if(!this.searchQuery) {return}
     trackService.search(this.searchQuery).
        then(res => this.tracks = res.tracks.items)
    },
  },
  
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
.results {
  margin-top: 5px;
}
</style>
