<template>
  <div class="container">
    <vs-tabs class="menu" color="#ffcb05">
      <vs-tab :key="index" v-for="(region, index) in regions" :label="region.name" @click="loadRegion(region)">
        <div>
          <div class="intro" v-if="!pokedex || region.name == 'Inicio'">
            <div class="title">
                <img src="https://fontmeme.com/permalink/210922/03ab396b25c9a7a15a4d33713e13bba9.png" alt="fonte-de-pokemon" border="0">
            </div>
            <div class="pokeball">
              <img src="../assets/img/pokeball.png" width="300" height="300">
            </div>
            <div class="author-box">
                <p>Feito por <span>Bruno Ferreira Ervilha</span></p>
                <p>Repo: <a href="https://github.com/BFErvilha/vue-pokedex" target="_blank">Vue Pokedex</a></p>
            </div>
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
        { name: 'Inicio', dex: '' },
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
      if (region.name === 'Inicio') {
        this.pokedex = null
      }
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
      if (this.dexRange !== '') {
        try {
          this.$vs.loading({
            type: 'point'
          })
          this.$vs.loading()
          const res = await axios.get(this.apiUrl + this.dexRange)
          this.pokedex = res.data.results
        } catch (error) {
          console.error(error)
        } finally {
          setTimeout(function () {
            this.$vs.loading.close()
          }, 5000)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.intro{
  margin: 50px auto;

  .title{
    margin: 0 auto;
  }

  .pokeball{
    margin: 30px auto;
  }

  .author-box{
    background: white;
    width: 600px;
    margin: 0 auto;
    padding: 15px 0px;
    border-radius: .375rem;

    p{
      font-size: 20px;
    }
  }
}
</style>
