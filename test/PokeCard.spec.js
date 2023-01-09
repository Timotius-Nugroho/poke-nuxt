import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import PokeCard from '../components/PokeCard.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const propsMock = {
  name: 'ivysaur',
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
  artwork:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
}

test('Render PokeCard without crashing', () => {
  const myPokesMock = [
    {
      alias: 'Initial Pokemon',
      name: 'ivysaur',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      caughtOn: '29 Des 2022',
    },
  ]
  const wrapper = mount(PokeCard, {
    mocks: {
      $store: {
        state: {
          myPokes: [],
        },
      },
    },
    localVue,
    propsData: propsMock,
  })
  expect(wrapper.find('.font-semibold').text()).toEqual(propsMock.name)
  expect(wrapper.find('img').attributes('src')).toEqual(propsMock.imgUrl)
})

test('Obtained Pokemon', () => {
  const myPokesMock = [
    {
      alias: 'Initial Pokemon',
      name: 'ivysaur',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      caughtOn: '29 Des 2022',
    },
  ]
  const wrapper = mount(PokeCard, {
    mocks: {
      $store: {
        state: {
          myPokes: myPokesMock,
        },
      },
    },
    localVue,
    propsData: propsMock,
  })

  expect(wrapper.html()).toContain('~obtained~')
})

test('Not yet obtained pokemon', () => {
  const myPokesMock = [
    {
      alias: 'Initial Pokemon',
      name: 'Not ivysaur',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      caughtOn: '29 Des 2022',
    },
  ]
  const wrapper = mount(PokeCard, {
    mocks: {
      $store: {
        state: {
          myPokes: myPokesMock,
        },
      },
    },
    localVue,
    propsData: propsMock,
  })

  expect(wrapper.html()).toContain('not yet obtained')
})

test('Move to detail poke when click card', () => {
  const wrapper = mount(PokeCard, {
    mocks: {
      $store: {
        state: {
          myPokes: [],
        },
      },
      $router: {
        push: () => {},
      },
    },
    localVue,
    propsData: propsMock,
  })
  const moveToDetailPokeMock = jest.spyOn(wrapper.vm, 'moveToDetailPoke')

  const card = wrapper.find('.card2')
  card.trigger('click')
  expect(moveToDetailPokeMock).toBeCalled()
})
