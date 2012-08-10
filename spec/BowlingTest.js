describe("Bowling", function() {

  beforeEach(function() {
    window.score = 0;
  });

  it("20回全部ガターを投げてトータル0", function() {
    for(i=0;i<20;i++){
      throw_bowl(0)
    }
    expect(window.score).toEqual(0);
  });

  it("20回全部1ピン全部倒してトータル20", function() {
    for(i=0;i<20;i++){
      throw_bowl(1)
    }
    expect(window.score).toEqual(20);
  });

});
