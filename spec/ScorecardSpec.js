'use strict';

describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('#scoreArray', function(){

    it ("Empty array exists", function(){

      expect(scorecard.scoreArray).toEqual([]);

    });

  });

  // describe ('#addScore', function() {

  //   it ("should add score to array", function() {

  //     scorecard.addScore(3)

  //     expect(scorecard.scoreArray).toContain(3)

  //   })
  // })

  describe ('#frameScore', function() {

    it("should return empty hash on initiialize", function() {

      expect(scorecard.frameScore).toEqual({})

    })

    it("should return a throw_1 when adding score less than 10", function() {

      scorecard.addScore(9)

      expect(scorecard.frameScore).toEqual({ throw_1: 9})


    })

  })



});
