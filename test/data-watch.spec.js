import Vue from '../src/index'

describe('Data watch', () => {
  it('cb is called', done => {
    const vm = new Vue({
      data() {
        return {
          a: 2
        }
      }
    })
    const cb = jasmine.createSpy('cb')
    vm.$watch('a', (pre, val) => {
      cb(pre, val)
    })
    vm.a = 3
    setTimeout(_ => {
      expect(cb).toHaveBeenCalledWith(2, 3)
      done()
    }, 0)
  })
})
