import { mount } from '@vue/test-utils'
import TicTacToe from '@/components/TicTacToe.vue'

describe('TicTacToe', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TicTacToe)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = mount(TicTacToe)
    expect(wrapper.element).toMatchSnapshot()
  })
  test('verify that the game is running', () => {
    const wrapper = mount(TicTacToe)
    wrapper.vm.onCell('1')
    expect(wrapper.vm.playing).toBeTruthy()
  })
  test('verify that the players are balancing', () => {
    const wrapper = mount(TicTacToe)
    const playerOne = wrapper.vm.wichTurn
    wrapper.vm.onCell('1')
    expect(wrapper.vm.cells['1']).toBe(playerOne)
    const playerTwo = wrapper.vm.wichTurn
    wrapper.vm.onCell('2')
    expect(wrapper.vm.cells['2']).toBe(playerTwo)
    expect(playerOne !== playerTwo).toBeTruthy()
  })
})
