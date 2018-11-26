const o = require('ospec')
const tagl_mithril = require('.')

o.spec('basic usage', () => {
    o('without classes', function(done) {
        function m(tagname, ...args) {
          o(tagname).equals('div')
          o(args).deepEquals([1, 2])
          done()
        }
        const { div } = tagl_mithril(m)
        div(1, 2)
    })

  o('with classes', function(done) {
    function m(tagname, ...args) {
      o(tagname).equals('span.foo')
      o(args).deepEquals([{}, 'huhu', 'haha'])
      done()
    }
    const { span } = tagl_mithril(m)
    span.foo({}, 'huhu', 'haha')
  })

  o('with camelcase classes', function(done) {
    function m(tagname, ...args) {
      o(tagname).equals('span.foo-fighters')
      o(args).deepEquals([{}, 'huhu', 'haha'])
      done()
    }
    const { span } = tagl_mithril(m)
    span.fooFighters({}, 'huhu', 'haha')
  })

  o('with camelcase id', function(done) {
    function m(tagname, ...args) {
      o(tagname).equals('span#foo-fighters')
      o(args).deepEquals([{}, 'huhu', 'haha'])
      done()
    }
    const { span } = tagl_mithril(m)
    span.$fooFighters({}, 'huhu', 'haha')
  })

})