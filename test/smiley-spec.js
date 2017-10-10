describe("smiley", function() {
  it("should add a smiley on the end", function(){
    expect(smiley("hello")).toEqual("hello :)");
  });
});
