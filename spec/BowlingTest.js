describe("Bowling", function() {

  beforeEach(function() {
    window.score = 0;
    window.pins = new Array();
  });

  it("20回全部ガターを投げてトータル0", function() {
    for(i=0;i<20;i++){
      throw_bowl(0)
    }
    getScore();
    expect(window.score).toEqual(0);
  });

  it("20回全部1ピン全部倒してトータル20", function() {
    for(i=0;i<20;i++){
      throw_bowl(1)
    }
    getScore();
    expect(window.score).toEqual(20);
  });

  it("1回スペアがあるケース", function() {
    throw_bowl(5)
    throw_bowl(5)
    for(i=2;i<20;i++){
      throw_bowl(1)
    }
    getScore()
    expect(window.score).toEqual(29);
  });

});
