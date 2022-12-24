<template>
  <div
    class="z-10 rounded-t-[35px] py-6 px-8 text-white bg-[#202329] w-full fixed bottom-0 flex justify-between"
  >
    <div class="flex items-center cursor-pointer" @click="moveToPage('/')">
      <img
        :src="[
          $nuxt.$route.path == '/'
            ? require('~/assets/icons/list-poke-on.svg')
            : require('~/assets/icons/list-poke-off.svg'),
        ]"
        class="h-6 sm:h-8 w-6 sm:w-8"
        :class="[$nuxt.$route.path == '/' ? 'animate-spin' : '']"
      />
      <div
        class="text-yellow-400 h-[26px] text-clip overflow-hidden transition-[width] duration-300"
        :class="[$nuxt.$route.path == '/' ? 'w-[108px]' : 'w-0']"
      >
        <div class="pl-3">pokemons</div>
      </div>
    </div>
    <div
      class="flex items-center cursor-pointer"
      @click="moveToPage('/my-poke')"
    >
      <img
        :src="[
          $nuxt.$route.path == '/my-poke'
            ? require('~/assets/icons/my-poke-on.svg')
            : require('~/assets/icons/my-poke-off.svg'),
        ]"
        class="h-6 sm:h-8 w-6 sm:w-8"
        :class="[$nuxt.$route.path == '/my-poke' ? 'animate-spin' : '']"
      />
      <div
        class="text-yellow-400 h-[26px] text-clip overflow-hidden transition-[width] duration-300"
        :class="[$nuxt.$route.path == '/my-poke' ? 'w-[92px]' : 'w-0']"
      >
        <div class="pl-3">my poke</div>
      </div>
    </div>
    <div class="flex items-center cursor-pointer" @click="moveToPage('/about')">
      <img
        :src="[
          $nuxt.$route.path == '/about'
            ? require('~/assets/icons/catch-on.svg')
            : require('~/assets/icons/catch-off.svg'),
        ]"
        class="h-6 sm:h-8 w-6 sm:w-8"
        :class="[$nuxt.$route.path == '/about' ? 'animate-bounce' : '']"
      />

      <div
        class="text-yellow-400 h-[26px] text-clip overflow-hidden transition-[width] duration-300"
        :class="[$nuxt.$route.path == '/about' ? 'w-[76px]' : 'w-0']"
      >
        <div class="pl-3">
          <!-- calculating... -->
          catch!
        </div>
      </div>
    </div>
    <div class="flex items-center cursor-pointer">
      <img src="~/assets/icons/ask-off.svg" class="h-6 sm:h-8 w-6 sm:w-8" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  methods: {
    moveToPage(path) {
      this.$router.push({
        path,
      })
    },
  },
}
</script>

<style scoped></style>
