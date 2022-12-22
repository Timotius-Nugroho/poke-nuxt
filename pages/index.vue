<template>
  <div class="text-slate-300 px-8 pt-36 pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
      <div>
        <img src="~/assets/icons/poke-statue.gif" class="h-60 sm:h-80" />
      </div>
      <div class="col-span-2 text-center lg:text-left">
        <div
          class="py-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-600"
        >
          Hey fellow trainers, have you heard of the latest craze sweeping the
          world?
        </div>
        <div class="mt-3 text-base sm:text-lg">
          It's called Pokémon! These cute and powerful creatures have captured
          the hearts of people everywhere, and now it's your chance to join in
          on the fun.
        </div>
        <button
          class="mt-5 text-xl bg-gradient-to-r from-lime-600 to-cyan-700 hover:from-pink-500 hover:to-yellow-500 py-2 px-5 rounded-xl"
        >
          Ready to catch 'em all?
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
