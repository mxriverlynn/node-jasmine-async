# Jasmine.Async

Make Jasmine's asynchronous testing suck less.

## About Jasmine.Async

I love [Jasmine](http://pivotal.github.com/jasmine/). It's a great BDD-style testing framework
for browser based JavaScript, and my preferred tool for doing
that kind of work. But the asynchronous testing story in Jasmine
is painful at best. 

Thus, Jasmine.Async was born out of frustration and little bit
of jealousy in how easy it is to do async tests with [Mocha](http://visionmedia.github.com/mocha/). 


## Basic Usage

First up, install it (saving it to dev dependencies in your
package.json file).

```
npm install node-jasmine-async --save-dev
```

Next up, require it in to your spec

```js
var AsyncSpec = require("node-jasmine-async");
```

Lastly, rock your async specs like there's no tomorrow!

```js
var AsyncSpec = require("node-jasmine-async");

describe("an async spec", function(){

  // set up the async spec
  var async = new AsyncSpec(this);

  // run an async setup
  async.beforeEach(function(done){
    doSomething();

    // simulate async stuff and wait 10ms
    setTimeout(function(){

      // more code here
      doMoreStuff();
 
      // when the async stuff is done, call `done()`
      done();

    }, 10); 
  });

  // run an async cleanup
  async.afterEach(function(done){
    // simulate async cleanup
    setTimeout(function(){

      done(); // done with the async stuff

    }, 10);
  });

  // run an async expectation
  async.it("did stuff", function(done){

    // simulate async code again
    setTimeout(function(){

      expect(1).toBe(1);
      
      // all async stuff done, and spec asserted
      done();

    });    

  });

});
```

## Release Notes

For change logs and release notes, see the
[changelog](changelog.md) file.

## Legal Mumbo-Jumbo (MIT License)

Copyright &copy;2014 Muted Solutions, LLC. All Rights Reserved.

Distributed under [MIT license](http://mutedsolutions.mit-license.org).
