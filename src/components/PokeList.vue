<template>

    <vs-row
        vs-align="center"
        vs-type="flex" vs-justify="space-around" vs-w="12">
      <vs-col :key="index"  v-for="(pokemon, index) in pokedex" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="12">
        <Pokemon
            :key="`pokemon-${index}`"
            :index="index + 1"
            :pkm="pokemon.name"
        />
      </vs-col>
    </vs-row>

</template>

<script>
import Pokemon from './Pokemon'

export default {
  name: 'PokeList',
  props: {
    pokedex: Array
  },
  components: {
    Pokemon
  }
}
</script>

<style scoped>

</style>
