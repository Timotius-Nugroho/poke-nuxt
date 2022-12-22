<!-- Please remove this file from your project -->
<template>
  <div class="card">
    <div
      class="card2 bg-gradient-to-r from-[#171719] via-[#171719] to-[#202329] flex items-center"
    >
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        class="w-32"
      />
      <div class="h-fit">
        <div class="font-semibold">pokemon name</div>
        <div class="text-xs mt-1 text-yellow-500">No Chaught yet</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
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
