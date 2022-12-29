<!-- Please remove this file from your project -->
<template>
  <div class="card h-80 border-b-2 border-amber-500">
    <div class="card-img">
      <div>
        <div class="flex justify-end">
          <div
            class="w-fit text-white font-medium text-lg sm:text-xl bg-[#202329] py-2 px-8 rounded-tr-[15px] rounded-bl-[15px]"
          >
            {{ alias }}
          </div>
        </div>
        <img class="h-72 mx-auto pb-6" :src="[artwork]" />
      </div>
    </div>
    <div class="card-info text-white p-4">
      <p class="text-title">{{ name }}</p>
      <p class="text-body">caught on {{ caughtOn }}</p>
      <div class="flex">
        <button class="font-bold bg-yellow-500 text-black px-4 py-1 rounded-md">
          release
        </button>
        <button
          class="bg-yellow-500 py-1 px-2 rounded-md ml-1"
          @click="moveToDetailPoke()"
        >
          <img src="~/assets/icons/eye.svg" class="h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPokeCard',
  props: {
    alias: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    caughtOn: {
      type: String,
      required: true,
    },
    artwork: {
      type: String,
      required: true,
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
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
}

.card:before {
  content: '';
  position: absolute;
  border-radius: 15px;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2;
  transition: 0.5s;
}

.card-info {
  border-radius: 15px;
  position: relative;
  z-index: 3;
  opacity: 0;
  transform: translateY(20%);
  transition: 0.5s;
  background-color: rgba(32, 35, 41, 0.8);
}

.text-title {
  font-size: 1.5rem;
  font-weight: 500;
}

.text-body {
  letter-spacing: 1px;
  font-size: 0.9rem;
  margin: 5px 0 15px 0;
}

/*Image*/
.card-img {
  border-radius: 15px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #171719;
}

/*Hover*/
.card:hover {
  transform: translateY(2%);
}

.card:hover:before {
  opacity: 1;
}

.card:hover .card-info {
  opacity: 1;
  transform: translateY(0);
}
</style>
