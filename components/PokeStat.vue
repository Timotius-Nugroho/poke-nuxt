<!-- Please remove this file from your project -->
<template>
  <div class="shadow-lg shadow-[#292934] bg-[#171719] rounded-[15px] pt-6">
    <div class="px-6 text-center text-2xl sm:text-3xl md:text-4xl">
      {{ value }}
    </div>
    <div class="mx-2">
      <div
        class="text-xs mt-1 rounded-[15px] bg-[#292934] w-full sm:w-fit py-1 px-4 mb-2 text-center sm:text-left"
      >
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeStat',
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>
