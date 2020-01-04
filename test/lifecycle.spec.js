import Vue from '../src/index'

describe('Lifecycle', () => {
  const cb = jasmine.createSpy('cb')

  it('mounted', () => {
    new Vue({
      mounted() {
        cb()
      },
      render(h) {
        return h('div', null, 'hello' /* string as children*/)
      }
    }).$mount()

    expect(cb).toHaveBeenCalled()
  })
})
