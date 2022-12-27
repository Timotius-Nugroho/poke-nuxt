<template>
  <div class="text-slate-300 pt-20 pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
      <div>
        <img src="~/assets/icons/poke-statue.gif" class="h-60 sm:h-80" />
      </div>
      <div class="col-span-2 text-center lg:text-left">
        <div>
          <span
            class="py-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-600"
          >
            Have you heard of the latest craze sweeping the world
          </span>
          <span class="text-3xl sm:text-4xl md:text-5xl">🌏 </span>
          <span
            class="py-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-600"
            >?</span
          >
        </div>
        <div class="mt-6 text-base sm:text-lg">
          It's called Pokémon! These cute and powerful creatures have captured
          the hearts of people everywhere.
        </div>
        <a href="#poke-list">
          <button
            class="mt-8 text-xl text-slate-200 bg-gradient-to-r from-lime-600 to-amber-600 py-2 px-5 rounded-xl"
          >
            Ready to catch 'em all?
          </button>
        </a>
      </div>
    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center pt-28 sm:pt-36 pb-36"
    >
      <div class="col-span-2 text-center lg:text-left">
        <span
          class="py-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600"
          >So don't wait any longer 🐒
        </span>
        <span class="mt-3 text-base sm:text-lg">
          grab your phone and start your journey today! The world of Pokémon is
          waiting for you, and with your determination and skill
        </span>
      </div>

      <div>
        <HoverCard />
      </div>
    </div>

    <div
      id="poke-list"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
    >
      <div>
        <PokeCard
          id="-"
          name="Blulusaurr"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
      </div>
      <div>
        <PokeCard
          id="-"
          name="mangekyo"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        />
      </div>
      <div>
        <PokeCard
          id="-"
          name="Tyuudgj"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        />
      </div>
      <div>
        <PokeCard
          id="-"
          name="Uiybhssasa"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        />
      </div>
      <div>
        <PokeCard
          id="-"
          name="Yhhghsqqw"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        />
      </div>
      <div>
        <PokeCard
          id="-"
          name="Opiiyuewbb"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
        />
      </div>
      <div>
        <PokeCard
          id="-"
          name="BBHgjdkasug7"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
        />
      </div>
      <div>
        <PokeCard
          id="-"
          name="Opokmkjas"
          img-url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        />
      </div>
      <div v-observe-visibility="loaderVisible"><PokeListSpinner /></div>
      <PokeListSpinner />
      <PokeListSpinner />
      <PokeListSpinner />
    </div>
  </div>
</template>

<script>
import PokeCard from '~/components/PokeCard.vue'
import PokeListSpinner from '~/components/PokeListSpinner.vue'

export default {
  name: 'IndexPage',
  components: { PokeCard, PokeListSpinner },
  methods: {
    loaderVisible(isVisible) {
      if (!isVisible) return
      console.log('BLOAD NEW DATA')
    },
  },
}
</script>
