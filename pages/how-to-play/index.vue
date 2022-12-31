<template>
  <div class="text-slate-300 pt-20 pb-28">
    <div
      class="text-center mb-10 text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-600"
    >
      Welcome to how to play
    </div>

    <div class="text-justify text-sm sm:text-base px-2 sm:px-0 mb-10">
      Through this how to play, I hope you can understand how to use this
      application properly. Basically, you just need to click
      <span
        class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600"
      >
        the `catch!` button below when you're on the Pokemon details page</span
      >. Have a nice play!
    </div>

    <img
      src="~/assets/images/how-to-play.gif"
      class="rounded-lg w-96 mx-auto"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
