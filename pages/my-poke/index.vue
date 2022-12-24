<template>
  <div>
    <div
      class="bg-red-400 text-blue-600 mt-32 h-fit overflow-hidden transition-[width] duration-500"
      :class="[togle ? 'w-32' : 'w-0']"
    >
      <div>GYTYWKKKK>>WJDIOWUU</div>
    </div>
    <button
      class="transition ease-in-out delay-150 bg-blue-500 duration-500"
      :class="togle ? '-translate-y-1 scale-110' : ''"
      @click="trim()"
    >
      CLIK
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      togle: false,
    }
  },
  methods: {
    trim() {
      this.togle = !this.togle
    },
  },
}
</script>
