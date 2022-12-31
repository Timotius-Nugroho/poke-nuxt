<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 pt-20 pb-44"
  >
    <MyPokeCard
      v-for="(myPoke, index) in $store.state.myPokes"
      :key="index"
      :alias="myPoke.alias"
      :name="myPoke.name"
      :caught-on="myPoke.caughtOn"
      :artwork="myPoke.artwork"
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
