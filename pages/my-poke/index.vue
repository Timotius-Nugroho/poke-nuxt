<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 pt-20 pb-44"
  >
    <MyPokeCard
      alias="Momo"
      name="Ibysaur"
      caught-on="20 sept 2022"
      artwork="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    />
    <MyPokeCard
      alias="Appa"
      name="Ibysaur"
      caught-on="20 sept 2022"
      artwork="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    />
    <MyPokeCard
      alias="Ijuyus"
      name="Ibysaur"
      caught-on="20 sept 2022"
      artwork="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    />
    <MyPokeCard
      alias="Ijuyus"
      name="Ibysaur"
      caught-on="20 sept 2022"
      artwork="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    />
    <MyPokeCard
      alias="Ijuyus"
      name="Ibysaur"
      caught-on="20 sept 2022"
      artwork="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    />
  </div>
</template>

<script>
import MyPokeCard from '~/components/MyPokeCard.vue'
export default {
  name: 'IndexPage',
  components: { MyPokeCard },
}
</script>
