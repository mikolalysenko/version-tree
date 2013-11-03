"use strict"

var createVersion = require("../versions")

require("tape")(function(t) {

  var root = createVersion()
  var a = root.fork()
  var b = root.fork()
  var c = a.fork()

  t.ok(root._a.compare(root._b) < 0)
  t.ok(a._a.compare(a._b) < 0)
  t.ok(b._a.compare(b._b) < 0)
  t.ok(c._a.compare(c._b) < 0)

  t.ok(root.subversion(a))
  t.ok(root.subversion(b))
  t.ok(root.subversion(b))
  t.ok(a.subversion(c))

  t.ok(!a.subversion(root))
  t.ok(!a.subversion(b))

  t.ok(!b.subversion(root))
  t.ok(!b.subversion(a))
  t.ok(!b.subversion(c))

  t.end()
})