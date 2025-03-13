import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SortOptions from '@/components/HomeView/SortOptions.vue'

describe('SortOptions.vue', () => {
  it('renders the correct initial selected sort option', () => {
    const wrapper = mount(SortOptions, {
      props: {
        selectedSort: 'ratingHighLow',
      },
    })

    const select = wrapper.find('select#sort')
    expect((select.element as HTMLSelectElement).value).toBe('ratingHighLow')
  })

  it('renders the correct sort options', () => {
    const wrapper = mount(SortOptions, {
      props: {
        selectedSort: '',
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(5)

    expect(options[1].element.value).toBe('ratingHighLow')
    expect(options[2].element.value).toBe('ratingLowHigh')
    expect(options[3].element.value).toBe('nameAZ')
    expect(options[4].element.value).toBe('nameZA')
  })

  it('emits update:selectedSort when the sort option is changed', async () => {
    const wrapper = mount(SortOptions, {
      props: {
        selectedSort: 'ratingHighLow',
      },
    })

    const select = wrapper.find('select#sort')
    await select.setValue('nameAZ')

    expect(wrapper.emitted()['update:selectedSort'][0]).toEqual(['nameAZ'])
  })

  it('does NOT emit an event when the value remains the same', async () => {
    const wrapper = mount(SortOptions, {
      props: {
        selectedSort: 'ratingHighLow',
      },
    })

    const select = wrapper.find('select#sort')
    await select.setValue('ratingHighLow')

    expect(wrapper.emitted()['update:selectedSort']).toBeUndefined()
  })
})
