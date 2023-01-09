import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations } from '../store/index'

const createStore = () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const store = new Vuex.Store({ state, mutations })

  return { store }
}

test('Should build store with initial state', () => {
  const { store } = createStore()
  const initialPokemon = {
    alias: 'Initial Pokemon',
    name: 'ivysaur',
    artwork:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    caughtOn: '29 Des 2022',
  }

  expect(store.state.myPokes.length).toEqual(1)
  expect(JSON.stringify(store.state.myPokes[0])).toEqual(
    JSON.stringify(initialPokemon)
  )
})

test('Should add new Pokemon', () => {
  const { store } = createStore()
  const newPokemon = {
    alias: 'New Pokemon',
    name: 'ivysaur New',
    artwork:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    caughtOn: '30 Des 2022',
  }

  store.commit('ADD_POKE', newPokemon)
  expect(store.state.myPokes).toContain(newPokemon)
})

test('Should remove pokemon by name', () => {
  const { store } = createStore()
  const newPokemon = {
    alias: 'New Pokemon',
    name: 'ivysaur New',
    artwork:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    caughtOn: '30 Des 2022',
  }

  store.commit('ADD_POKE', newPokemon)
  expect(store.state.myPokes).toContain(newPokemon)

  store.commit('REMOVE_POKE', newPokemon.name)
  expect(store.state.myPokes).not.toContain(newPokemon)
})

test('Should toggle isCalculating state', () => {
  const { store } = createStore()
  expect(store.state.isCalculating).toBeFalsy()

  store.commit('TOGGLE_CALC')
  expect(store.state.isCalculating).toBeTruthy()
})
