import { mount } from '@vue/test-utils'
import PokeFace from '../components/PokeFace.vue'

const pokeInfoMock = {
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
  exp: 80,
}

test('Render poke face without crashing', () => {
  const wrapper = mount(PokeFace, {
    propsData: pokeInfoMock,
  })
  //   console.log(wrapper.html())
  expect(wrapper.find('img').attributes('src')).toEqual(pokeInfoMock.imgUrl)
  expect(wrapper.html()).toContain(String(pokeInfoMock.exp))
})
