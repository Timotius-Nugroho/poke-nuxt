<template>
  <div class="text-slate-300 pt-20 pb-28">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <PokeFace :img-url="$route.query.artwork" :exp="exp" />

      <div class="col-span-2 ml-0 md:ml-8 mt-16 sm:mt-20 md:mt-0">
        <div
          class="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold"
        >
          {{ $route.query.name }}
        </div>
        <div class="flex justify-end mt-12 mb-4 md:mb-8 font-bold">
          <div
            v-for="(type, index) in types"
            :key="index"
            class="text-xs bg-yellow-500 text-black rounded-[15px] px-4 py-1 mx-1"
          >
            {{ type.type.name }}
          </div>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
          <PokeStat
            v-for="(stat, index) in stats"
            :key="index"
            :name="stat.stat.name"
            :value="stat.base_stat"
          />
        </div>
      </div>
    </div>

    <div class="mt-10 sm:mt-12">
      <div class="text-base sm:text-lg md:text-xl font-bold">abilities</div>
      <div class="flex flex-wrap mt-5 w-full">
        <div
          v-for="(ability, index) in abilities"
          :key="index"
          class="font-bold text-sm bg-yellow-500 text-black rounded-[15px] px-4 py-1 mr-1 mb-2"
        >
          {{ ability.ability.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokeStat from '~/components/PokeStat.vue'

export default {
  name: 'IndexPage',
  components: { PokeStat },
  data() {
    return {
      abilities: [],
      exp: 0,
      stats: [],
      types: [],
    }
  },
  created() {
    this.getDetails()
  },
  methods: {
    getDetails() {
      const query = `query pokemon($name: String!) {
        pokemon(name: $name) {
          stats {
            base_stat
            stat {
              name
            }
          }
          base_experience
          types {
            type {
              name
            }
          }
          abilities {
            ability {
              name
            }
          }
        }
      }`

      this.$axios
        .post('/', {
          query,
          variables: {
            name: this.$route.query.name,
          },
        })
        .then((res) => {
          this.abilities = res.data.data.pokemon.abilities
          this.exp = res.data.data.pokemon.base_experience
          this.stats = res.data.data.pokemon.stats
          this.types = res.data.data.pokemon.types
        })
        .catch((err) => {
          console.warn(JSON.stringify(err))
        })
    },
  },
}
</script>
