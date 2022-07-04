import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResultVue from '../components/Result.vue'

test('初期表示', () => {
  const wrapper = mount(ResultVue, {
    props: {
      topic: 'たぬき',
      result: 'ぱんだ'
    }
  })

  expect(wrapper.text()).toContain('たぬき')
})