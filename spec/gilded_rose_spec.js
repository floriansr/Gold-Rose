import LegendaryObject from "../src/legendaryproduct.js";
import BetterQualityWithTime from "../src/betterqualitywithtime.js";
import Tickets from "../src/tickets.js";
import BasicProduct from "../src/basicproduct.js";
import Shop from "../src/shop.js";

describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(new BasicProduct("+5 Dexterity Vest", 10, 20));
    listItems.push(new BasicProduct("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  // it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
  //   listItems.push(new Item("Aged Brie", 20, 30));
  //   listItems.push(
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30)
  //   );

  //   const gildedRose = new Shop(listItems);
  //   const items = gildedRose.updateQuality();

  //   var expected = [
  //     { sellIn: 19, quality: 31 },
  //     { sellIn: 19, quality: 31 },
  //   ];
  //   expected.forEach(function (testCase, idx) {
  //     expect(items[idx].quality).toBe(testCase.quality);
  //     expect(items[idx].sellIn).toBe(testCase.sellIn);
  //   });
  // });
});
