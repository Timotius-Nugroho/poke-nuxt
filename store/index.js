// holds your root state
export const state = () => ({
  myPokes: [
    {
      alias: 'Initial Pokemon',
      name: 'ivysaur',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      caughtOn: '29 Des 2022',
    },
  ],
  isCalculating: false,
  errMsg: '',
})

// contains your mutations
export const mutations = {
  ADD_POKE(state, poke) {
    const isExist = state.myPokes.some((e) => e.name === poke.name)
    if (isExist) {
      state.errMsg = 'This pokemon has been caught'
      return
    }

    state.myPokes = [poke, ...state.myPokes]
  },
  REMOVE_POKE(state, name) {
    const newPokes = state.myPokes.filter((e) => e.name !== name)
    state.myPokes = [...newPokes]
  },
  TOGGLE_CALC(state) {
    if (!state.isCalculating) {
      state.errMsg = ''
    }
    state.isCalculating = !state.isCalculating
  },
}
