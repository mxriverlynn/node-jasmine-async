var AsyncSpec = require("../src/jasmine.async.js");

describe("jasmine.async", function(){
  var wait = 0,
      beforeEachCompleted;

  var async = new AsyncSpec(this);

  beforeEach(function(){
    beforeEachCompleted = false;
  });

  async.beforeEach(function(done){
    setTimeout(function(){
      beforeEachCompleted = true;
      expect(true).toBe(true);
      done();
    }, wait); 
  });

  async.it("completes the async test", function(done){
    setTimeout(function(){
      expect(true).toBe(true);
      done();
    }, wait);    
  });

  async.afterEach(function(done){
    setTimeout(function(){
      expect(true).toBe(true);
      done();
    }, wait);
  });
});
