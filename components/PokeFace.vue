<template>
  <div class="card h-fit">
    <div class="z-[1] p-5">
      <img :src="[imgUrl]" />
      <div class="rounded-[15px] bg-[#292934] w-fit py-1 px-4">
        80 <span class="italic">Exp</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeFace',
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  background: #171719;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card::before {
  content: '';
  position: absolute;
  width: 180%;
  background-image: linear-gradient(180deg, #facc15, #d97706);
  height: 50%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #171719;
  inset: 5px;
  border-radius: 15px;
}
</style>
