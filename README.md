version-tree
============
A data structure for maintaining a tree of versions.  This can be useful when implementing [fully persistent data structures](http://en.wikipedia.org/wiki/Persistent_data_structure) using the [DTSS method](http://www.cs.cmu.edu/~sleator/papers/Persistence.htm).  Works in both node.js and [browserify](http://browserify.org/).

## Example

```javascript
var createVersionTree = require("version-tree")

//Create a new tree
var root = createVersionTree()

//Create two subversions
var a = root.fork()
var b = root.fork()

//Compare root to children
console.log(root.subversion(a), root.subversion(b), a.subversion(root), b.subversion(a))

// Prints out:
//  true    true    false   false


//Make a child version of a
var c = a.fork()
console.log(root.subversion(c), a.subvsersion(c), b.subversion(c))

//Prints out:
//    true    true    false
```

## Install

    npm install version-tree

## API

```javascript
var createVersionTree = require("version-tree")
```

### `var tree = createVersionTree()`
Creates a new version tree with one root version

### `tree.fork()`
Creates a new subversion of `tree`.

**Returns** A new version which inherits from `tree`

### `tree.subversion(other)`
Tests if `other` is a subversion of `tree`.

**Returns** `true` if `other` is an ancestor of `tree`, `false` otherwise

## Credits
(c) 2013 Mikola Lysenko. MIT License
