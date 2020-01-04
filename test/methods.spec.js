import Vue from '../src/index'

describe('Methods', function() {
  it('Basic', function() {
    const vm = new Vue({
      methods: {
        hello() {
          return {
            self: this,
            msg: 'hello'
          }
        }
      }
    })
    const res = vm.hello()
    
    expect(res.self).toEqual(vm)
    expect(res.msg).toEqual('hello')
  })
})
