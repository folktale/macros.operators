macros.operators
================

[![Build Status](https://secure.travis-ci.org/folktale/macros.operators.png?branch=master)](https://travis-ci.org/folktale/macros.operators)
[![NPM version](https://badge.fury.io/js/macros.operators.png)](http://badge.fury.io/js/macros.operators)
[![Dependencies Status](https://david-dm.org/folktale/macros.operators.png)](https://david-dm.org/folktale/macros.operators)
[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges)


Sweet.js operator macros for common operations


## Example

```js
f >>= g;          // chaining
a <*> b <*> c;    // ap
a +++ b +++ c;    // concat
a |> f; g <| a;   // piping
f ->> g; f <<- g; // function composition
```


## Installing

    $ npm install macros.operators


## Licence

Copyright (c) 2014 Quildreen Motta.

Released under the [MIT licence](https://github.com/folktale/macros.operators/blob/master/LICENCE).

<!-- links -->
[Fantasy Land]: https://github.com/fantasyland/fantasy-land
[Browserify]: http://browserify.org/
[Git]: http://git-scm.com/
[Make]: http://www.gnu.org/software/make/
[Node.js]: http://nodejs.org/
[es5-shim]: https://github.com/kriskowal/es5-shim
[docs]: http://folktale.github.io/macros.operators
<!-- [release: https://github.com/folktale/macros.operators/releases/download/v$VERSION/macros.operators-$VERSION.tar.gz] -->
[release]: https://github.com/folktale/macros.operators/releases/download/v0.0.0/macros.operators-0.0.0.tar.gz
<!-- [/release] -->
