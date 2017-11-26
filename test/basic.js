var assert = require("chai").assert;
var hello = require("../app/main.js");
describe("helloWorld",function() {
  it("Hello World!",function() {
    assert.equal(main("World"),"Hello World!");
  });
  it("Hello codecheck!",function() {
    assert.equal(main("codecheck"),"Hello codecheck!");
  });
  it("Hello 織田信長!",function() {
    assert.equal(main("織田信長"),"Hello 織田信長!");
  });
  it("Hello!",function() {
    assert.equal(main(""),"Hello !");
  });
});
