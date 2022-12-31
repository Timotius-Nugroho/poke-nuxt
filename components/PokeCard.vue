<!-- Please remove this file from your project -->
<template>
  <div class="card">
    <div
      class="card2 bg-[#171719] flex items-center"
      @click="moveToDetailPoke()"
    >
      <img :src="[imgUrl]" class="w-32" />
      <div class="h-fit">
        <div class="font-semibold">{{ name }}</div>
        <div class="text-xs mt-1 text-yellow-500 bg-[#202329] p-2 rounded-md">
          {{ isObtained ? '~obtained~' : 'not yet obtained' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    artwork: {
      type: String,
      required: true,
    },
  },
  computed: {
    isObtained() {
      const isExist = this.$store.state.myPokes.some(
        (e) => e.name === this.name
      )
      return isExist
    },
  },
  methods: {
    moveToDetailPoke() {
      this.$router.push({
        path: '/about',
        query: { name: this.name, artwork: this.artwork },
      })
    },
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(163deg, #f5cf36 0%, #b67832 100%);
  border-radius: 20px;
  transition: all 0.3s;
}

.card2 {
  width: calc(100% - 2px);
  height: calc(100% - 1px);
  border-radius: 18px;
  transition: all 0.2s;
  cursor: pointer;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(217, 119, 6, 0.3);
}
</style>
