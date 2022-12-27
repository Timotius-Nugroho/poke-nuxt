<template>
  <div class="text-slate-300 pt-20 pb-28">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <PokeFace
        img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
      />
      <div class="col-span-2 ml-0 md:ml-8 mt-16 sm:mt-20 md:mt-0">
        <div
          class="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold"
        >
          Ivisauryy
        </div>
        <div class="flex justify-end mt-12 mb-4 md:mb-8 font-bold">
          <div
            class="text-xs bg-yellow-500 text-black rounded-[15px] px-4 py-1 mx-1"
          >
            posion
          </div>
          <div
            class="text-xs bg-yellow-500 text-black rounded-[15px] px-4 py-1 mx-1"
          >
            posion
          </div>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
          <PokeStat />
          <PokeStat />
          <PokeStat />
          <PokeStat />
          <PokeStat />
          <PokeStat />
        </div>
      </div>
    </div>

    <div class="mt-10 sm:mt-12">
      <div class="text-base sm:text-lg md:text-xl font-bold">abilities</div>
      <div class="flex flex-wrap mt-5 w-full">
        <div
          class="font-bold text-sm bg-yellow-500 text-black rounded-[15px] px-4 py-1 mr-1 mb-2"
        >
          bindewewwew
        </div>
        <div
          class="font-bold text-sm bg-yellow-500 text-black rounded-[15px] px-4 py-1 mr-1 mb-2"
        >
          bindew
        </div>
        <div
          class="font-bold text-sm bg-yellow-500 text-black rounded-[15px] px-4 py-1 mr-1 mb-2"
        >
          bind
        </div>
        <div
          class="font-bold text-sm bg-yellow-500 text-black rounded-[15px] px-4 py-1 mr-1 mb-2"
        >
          bindewew
        </div>
        <div
          class="font-bold text-sm bg-yellow-500 text-black rounded-[15px] px-4 py-1 mr-1 mb-2"
        >
          bind
        </div>
        <div
          class="font-bold text-sm bg-yellow-500 text-black rounded-[15px] px-4 py-1 mr-1 mb-2"
        >
          bindewewew
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokeStat from '~/components/PokeStat.vue'

export default {
  name: 'IndexPage',
  components: { PokeStat },
}
</script>
