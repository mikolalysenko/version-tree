"use strict"

var createOrder = require("order-maintenance")

module.exports = createVersionTree

function Version(parent) {
  this._b = parent.insert()
  this._a = parent.insert()
}

var proto = Version.prototype

proto.fork = function() {
  return new Version(this._a)
}

proto.subversion = function(other) {
  return (this._a.compare(other._a) <= 0) && (other._b.compare(this._b) <= 0)
}

function createVersionTree() {
  return new Version(createOrder())
}