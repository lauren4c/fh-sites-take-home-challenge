var assert = require("assert");
var PokerHand = require("../pokerHand.js");

/**
 * test
 */
describe("Rank a Royal Flush", function() {
  it("Return royal flush when hand given", function() {
    var hand = new PokerHand("Ks Qs Js Ts As");
    assert.equal(hand.getRank(), "Royal Flush");
  });
});

/**
 * test
 */
describe("Rank A Straight Flush", function() {
  var hand = new PokerHand("Th 9h 8h 7h 6h");

  it("Return straight flush when hand given", function() {
    assert.equal(hand.getRank(), "Straight Flush");
  });
});

/**
 * test
 */
describe("Rank A Four of a Kind", function() {
  var hand = new PokerHand("6d 6s 6h 6c 9h");

  it("Return four of a kind when hand given", function() {
    assert.equal(hand.getRank(), "Four of a Kind");
  });
});

/**
 * test
 */
describe("Rank A Full House", function() {
  var hand = new PokerHand("Th Td Ts 2h 2c");

  it("Return Full House when hand given", function() {
    assert.equal(hand.getRank(), "Full House");
  });
});
/**
 * test
 */
describe("Rank A Flush", function() {
  var hand = new PokerHand("Kh Qh 6h 2h 9h");

  it("Return flush when hand given", function() {
    assert.equal(hand.getRank(), "Flush");
  });
});

/**
 * test
 */
describe("Rank A Straight", function() {
  var hand = new PokerHand("Th 9d 8c 7d 6h");

  it("Return straight when hand given", function() {
    assert.equal(hand.getRank(), "Straight");
  });
});

/**
 * test
 */
describe("Rank a three of a kind", function() {
  it("Return three of a kind when hand given", function() {
    var hand = new PokerHand("Ah As Ad 7c 6s");

    assert.equal(hand.getRank(), "Three of a Kind");
  });
});
/**
 * test
 */
describe("Rank a Two Pair", function() {
  it("Return two pair when hand given", function() {
    var hand = new PokerHand("Ah As Tc Ts 6s");

    assert.equal(hand.getRank(), "Two Pair");
  });
});
/**
 * test
 */
describe("Rank a Pair", function() {
  it("Return one pair when hand given", function() {
    var hand = new PokerHand("Ah As Tc 7d 6s");

    assert.equal(hand.getRank(), "One Pair");
  });
});
/**
 * test
 */
describe("Rank a high card", function() {
  it("Return high card when hand given", function() {
    var hand = new PokerHand("Kh Qs Tc 7d 6s");

    assert.equal(hand.getRank(), "High Card");
  });
});
