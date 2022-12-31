<!-- Please remove this file from your project -->
<template>
  <div
    v-show="isShowLoaders"
    class="flex justify-center items-center z-20 h-screen w-screen fixed top-0 bg-neutral-900/[.8]"
  >
    <div v-show="$store.state.isCalculating">
      <div class="loader mr-2"></div>
      <div class="loader"></div>
    </div>
    <div
      v-show="!$store.state.isCalculating"
      class="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600"
    >
      {{ $store.state.errMsg ? $store.state.errMsg : 'Obtained!' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcIndicators',
  data() {
    return {
      isShowLoaders: false,
    }
  },
  watch: {
    '$store.state.isCalculating': function (val) {
      if (val) {
        this.isShowLoaders = true
        setTimeout(() => {
          this.isShowLoaders = false
        }, 5000)
      }
    },
  },
}
</script>

<style scoped>
.loader {
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 5px solid #d97706;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: rot5 1s infinite;
}

@keyframes rot5 {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    border-top-color: #d97706;
    border-bottom-color: #facc15;
    border-right-color: transparent;
    border-left-color: transparent;
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
