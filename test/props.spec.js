import Vue from '../src/index'

describe('Props', () => {
  it('Basic', () => {
    var vm = new Vue({
      props: ['msg'],
      propsData: {
        msg: 'hello'
      },
      render(h) {
        return h('div', {}, this.msg)
      }
    }).$mount()

    expect(vm.msg).toEqual('hello')
    expect(vm.$el.textContent).toEqual('hello')
  })
})
