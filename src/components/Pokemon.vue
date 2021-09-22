<template>
  <div>
    <article class="card" v-if="pokemon">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            #{{ pokemon.id }} - {{ pokemon.name }}
          </h3>
        </div>
        <div slot="media">
          <img :src="pokemonImgUrl" :alt="pokemon.name" width="96px" height="96" />
        </div>
        <div>
          <span
              v-for="(value, index) in pokemon.types"
              :key="`${value}-${index}`"
              class="type"
              :class="
            `${value.type.name}`
          "
          >
          {{ value.type.name }}
        </span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" > Detalhes </vs-button>
          </vs-row>
        </div>
      </vs-card>
    </article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pokemon',
  props: {
    index: Number,
    pkm: String
  },
  data () {
    return {
      apiUrl: 'https://pokeapi.co/api/v2/pokemon',
      pokemon: null,
      pokemonImgUrl: ''
    }
  },
  created () {
    this.loadPokemonData(this.pkm)
  },
  methods: {
    async loadPokemonData (name) {
      try {
        this.$vs.loading({
          type: 'point'
        })
        const res = await axios.get(this.apiUrl + '/' + name)
        this.pokemon = res.data
        this.pokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`
      } catch (error) {
        console.error(error)
      } finally {
        this.$vs.loading.close()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    width: 260px;
    margin: 5px 10px;
  }
  .vs-card--media img {
     width: auto;
    margin: 0 auto;
  }

  .type{
    color: white;
    padding: 5px 10px;
    border-radius: .375rem;
    text-transform: capitalize;
    margin: 0px 5px;
    border: 1.5px solid;
  }
  .bug{
      background: #adbd21;
      border-color: #426b39;
  }
  .dark{
     background: #735a4a;
     border-color: #4a3931;
   }
  .dragon{
    background: #7b63e7;
    border-color: #4a3994;
  }
  .electric{
    background: #fec631;
    border-color: #735218;
  }
  .fairy{
    background: #f7b5f7;
    border-color: #bd18ce;
  }
  .fighting{
    background: #a55239;
    border-color: #4a3931;
  }
  .fire{
    background: #f75231;
    border-color: #732108;
  }
  .flying{
    background: #9cadf7;
    border-color: #425294;
  }
  .ghost{
    background: #6363b5;
    border-color: #4a3952;
  }
  .grass{
    background: #7bce52;
    border-color: #426b39;
  }
  .ground{
    background: #d6b55a;
    border-color: #735218;
  }
  .ice{
    background: #5acee7;
    border-color: #425294;
  }
  .normal{
    background: #ada594;
    border-color: #525252;
  }
  .poison{
    background: #b55aa5;
    border-color: #4a3952;
  }
  .psychic{
    background: #ff73a5;
    border-color: #6b3939;
  }
  .rock {
    background: #bda55a;
    border-color: #735218;
  }
  .steel{
    background: #adadc6;
    border-color: #525252;
  }
  .water{
    background: #399cff;
    border-color: #425294;
  }
</style>
