<template>
  <div class="container">
    <vs-tabs class="menu" color="#ffcb05">
      <vs-tab :key="index" v-for="(region, index) in regions" :label="region.name" @click="loadRegion(region)">
        <div>
          <div v-if="!pokedex">
            <img src="../assets/img/pokeball.png" width="100" height="100">
          </div>

          <poke-list class="pokemon-list" v-if="pokedex" :pokedex="pokedex" :apiImg="apiImg" :apiUrl="apiUrl"/>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import PokeList from './PokeList'
import axios from 'axios'

export default {
  name: 'Pokemon',
  components: { PokeList },
  data () {
    return {
      apiUrl: 'https://pokeapi.co/api/v2/pokemon',
      apiImg: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      apIgen: 'https://pokeapi.co/api/v2/generation/',
      pokedex: null,
      showDetail: false,
      isLoading: false,
      dexRange: '',
      regions: [
        { name: 'Kanto', dex: '?limit=151' },
        { name: 'Johto', dex: '?offset=151&limit=100' },
        { name: 'Hoenn', dex: '?offset=251&limit=135' },
        { name: 'Sinnoh', dex: '?offset=386&limit=108' },
        { name: 'Unova', dex: '?offset=494&limit=155' },
        { name: 'Kalos', dex: '?offset=649&limit=72' },
        { name: 'Alola', dex: '?offset=721&limit=88' },
        { name: 'Galar', dex: '?offset=809&limit=89' }
      ]
    }
  },
  methods: {
    async loadRegion (region) {
      switch (region.name) {
        case 'Kanto':
          this.pokedex = null
          this.dexRange = region.dex
          break
        case 'Johto':
          this.pokedex = null
          this.dexRange = region.dex
          break
        case 'Hoenn':
          this.pokedex = null
          this.dexRange = region.dex
          break
        case 'Sinnoh':
          this.pokedex = null
          this.dexRange = region.dex
          break
        case 'Unova':
          this.pokedex = null
          this.dexRange = region.dex
          break
        case 'Kalos':
          this.pokedex = null
          this.dexRange = region.dex
          break
        case 'Alola':
          this.pokedex = null
          this.dexRange = region.dex
          break
        case 'Galar':
          this.pokedex = null
          this.dexRange = region.dex
          break
        default:
          this.dexRange = ''
      }
      try {
        this.$vs.loading({
          type: 'point'
        })
        const res = await axios.get(this.apiUrl + this.dexRange)
        console.log(res.data)
        this.pokedex = res.data.results
      } catch (error) {
        console.error(error)
      } finally {
        this.$vs.loading.close()
      }
    }
  }
}
</script>

<style scoped>
.container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
