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
var __ref = require('claire');
var forAll = __ref.forAll;
var __o = __ref.data;
var Any = __o.Any;
var sized = __ref.sized;
var Id = require('../id');
var Anys = sized(function () {
        return 10;
    }, Any);
module.exports = function (hifive) {
    var _scope = {
            hifive: hifive,
            tests: [],
            beforeAll: [],
            afterAll: [],
            beforeEach: [],
            afterEach: []
        };
    (function () {
        var _scope$2 = {
                hifive: _scope.hifive,
                tests: [],
                beforeAll: [],
                afterAll: [],
                beforeEach: [],
                afterEach: []
            };
        _scope$2.tests.push(_scope$2.hifive.Test.Case.create({
            name: 'a <|> b <|> c => a.orElse(x -> b).orElse(x -> c)',
            timeout: new _scope$2.hifive._Maybe.Nothing(),
            slow: new _scope$2.hifive._Maybe.Nothing(),
            enabled: new _scope$2.hifive._Maybe.Nothing(),
            test: new _scope$2.hifive._Future(function (reject, resolve) {
                try {
                    (function () {
                        forAll(Anys, Anys, Anys).satisfy(function (a, b, c) {
                            return !!function (alright) {
                                return alright.verify(Id(a).orElse(function (a$2) {
                                    return Id(b);
                                }).orElse(function (a$2) {
                                    return Id(c);
                                }))(alright.equal(Id(a).orElse(function () {
                                    return Id(b);
                                }).orElse(function () {
                                    return Id(c);
                                })));
                            }(typeof module !== 'undefined' && typeof require !== 'undefined' ? require('alright') : window.alright);
                        }).asTest()();
                    }());
                    resolve();
                } catch (e) {
                    reject(e);
                }
            })
        }));
        _scope.tests.push(_scope.hifive.Test.Suite.create({
            name: 'Alternative',
            tests: _scope$2.tests,
            beforeAll: _scope.hifive.Hook(_scope$2.beforeAll),
            beforeEach: _scope.hifive.Hook(_scope$2.beforeEach),
            afterAll: _scope.hifive.Hook(_scope$2.afterAll),
            afterEach: _scope.hifive.Hook(_scope$2.afterEach)
        }));
    }());
    return _scope.tests[0];
}(typeof module !== 'undefined' && typeof require !== 'undefined' ? require('hifive') : window.hifive);