// Copyright (c) 2014 Quildreen Motta <quildreen@gmail.com>
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation files
// (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var {forAll, data: {Int}} = require('claire');
var Id = require('../id');

var add = λ a b -> a + b;
var add3 = λ(a, b, c) -> a + b + c;
var inc = add(1);
var doubled = λ a -> a * 2;

module.exports = spec 'Functions' {
  it 'a |> f |> g === g(f(a))' {
    forAll(Int, Int).satisfy(function(a, b) {
      return !!(a |> inc |> doubled => doubled(inc(a)))
    }).asTest()()
  }

  it 'g <| f <| a === g(f(a))' {
    forAll(Int, Int).satisfy(function(a, b) {
      return !!(doubled <| inc <| a => doubled(inc(a)))
    }).asTest()()
  }

  it '(f ->> g ->> h)(a) === f(g(h(a)))' {
    forAll(Int).satisfy(function(a) {
      return !!((inc ->> doubled ->> inc)(a) => inc(doubled(inc(a))))
    }).asTest()()
  }

  it '(h <<- g <<- f)(a) === f(g(h(a)))' {
    forAll(Int).satisfy(function(a) {
      return !!((inc <<- doubled <<- inc)(a) => inc(doubled(inc(a))))
    }).asTest()()
  }

  it 'a @f b, c === f(a, b, c)' {
    forAll(Int, Int, Int).satisfy(function(a, b, c) {
      return !!(a @add3 b, c => add3(a, b, c))
    })
  }
}
