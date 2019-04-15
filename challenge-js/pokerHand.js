class PokerHand {
  constructor(hand) {
    this.hand = hand;
  }
  getRank() {
    var rank;
    var suits = {
      h: [],
      s: [],
      c: [],
      d: []
    };
    var kinds = {
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      T: [],
      J: [],
      Q: [],
      K: [],
      A: []
    };
    var countedKinds = [];

    //sort cards by suit & by kind
    const cards = this.hand.split(" ");
    cards.forEach(function(card) {
      var suit = card.split("")[1];
      var kind = card.split("")[0];
      kinds[kind].push(card);
      suits[suit].push(card);
    });

    //let's find the rank!
    while (!rank) {
      for (var j in suits) {
        if (suits.hasOwnProperty(j)) {
          //check for flushes first by looking for groups of suits
          if (suits[j].length == 5) {
            if (longest_run() == 5) {
              let checkForAce = suits[j].includes("A" + j);
              checkForAce ? (rank = "Royal Flush") : (rank = "Straight Flush");
              return rank;
            } else {
              return (rank = "Flush");
            }
          }
        }
      }
      //check for straight
      for (var k in kinds) {
        if (kinds.hasOwnProperty(k)) {
          if (longest_run() == 5) {
            return (rank = "Straight");
          }
        }
      }
      //check for multiples/pairs
      Object.keys(kinds).forEach(function(k) {
        let length = kinds[k].length;
        countedKinds.push(length);
      });
      if (countedKinds.includes(4)) {
        return (rank = "Four of a Kind");
      } else if (countedKinds.includes(3)) {
        if (countedKinds.includes(2)) {
          return (rank = "Full House");
        } else {
          return (rank = "Three of a Kind");
        }
      } else if (countedKinds.includes(2)) {
        //check how many pairs
        var pairs = {};
        countedKinds.forEach(function(x) {
          pairs[x] = (pairs[x] || 0) + 1;
        });
        if (pairs[2] == 2) {
          return (rank = "Two Pair");
        } else {
          return (rank = "One Pair");
        }
      } else {
        // if we haven't found a rank by now, it must be high card.
        return (rank = "High Card");
      }
    }

    //helper to check for runs
    function longest_run() {
      var count = 0;
      var max_run = 0;
      ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"].forEach(
        function(k) {
          if (kinds[k].length >= 1) {
            count += 1;
          } else {
            if (count > max_run) {
              max_run = count;
            }
            count = 0;
          }
        }
      );
      if (max_run > count) {
        return max_run;
      } else {
        return count;
      }
    }
  }
}

module.exports = PokerHand;
