import { expect } from 'chai'
import { config, shallowMount } from '@vue/test-utils'
import options from '@/components/KebaVue/options'
import KvApp from '@/components/app/KvApp'

config.mocks.$kebavue = options

describe('KvApp.vue', () => {
  it('contains the kv-app class', () => {
    const wrapper = shallowMount(KvApp)
    expect(wrapper.classes()).contain('kv-app')
  })
})
