import LegendaryObject from "../src/legendaryproduct.js";
import Conjured from "../src/conjured.js";
import BetterQualityWithTime from "../src/betterqualitywithtime.js";
import BasicProduct from "../src/basicproduct.js";
import Shop from "../src/shop.js";

describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });

  //////////////////////////////////////////////////////////

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

  //////////////////////////////////////////////////////////

  it("Baisser de 2 la qualité si le produit est périmé", function () {
    listItems.push(new BasicProduct("+5 Dexterity Vest", 0, 20));
    listItems.push(new BasicProduct("Mana Cake", 0, 6));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: -1, quality: 18 },
      { sellIn: -1, quality: 4 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("Baisser de 2 la qualité et de 1 sellIn, les objets Conjured", function () {
    listItems.push(new Conjured("Conjured Dexterity Vest", 10, 20));
    listItems.push(new Conjured("Conjured Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 18 },
      { sellIn: 2, quality: 4 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("Baisser de 4 la qualité si un objet conjured est périmé", function () {
    listItems.push(new Conjured("Conjured Dexterity Vest", 0, 16));
    listItems.push(new Conjured("Conjured Mana Cake", 0, 5));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: -1, quality: 12 },
      { sellIn: -1, quality: 1 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(new BetterQualityWithTime("Aged Brie", 20, 30));
    listItems.push(
      new BetterQualityWithTime(
        "Backstage passes to a TAFKAL80ETC concert",
        20,
        30
      )
    );

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("Augmenter la qualité de 2 pour Aged Brie et Backstage Pass si date de péremption comprise entre 6 et 11 jours suivants", function () {
    listItems.push(new BetterQualityWithTime("Aged Brie", 10, 30));
    listItems.push(
      new BetterQualityWithTime(
        "Backstage passes to a TAFKAL80ETC concert",
        10,
        30
      )
    );

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 32 },
      { sellIn: 9, quality: 32 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("Augmenter la qualité de 3 pour Aged Brie et Backstage Pass si date de péremption comprise dans les 6 jours suivants", function () {
    listItems.push(new BetterQualityWithTime("Aged Brie", 5, 30));
    listItems.push(
      new BetterQualityWithTime(
        "Backstage passes to a TAFKAL80ETC concert",
        5,
        30
      )
    );

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 4, quality: 33 },
      { sellIn: 4, quality: 33 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("Date de péremption dépassée, votre objet ne vaut plus rien", function () {
    listItems.push(new BetterQualityWithTime("Aged Brie", 0, 30));
    listItems.push(
      new BetterQualityWithTime(
        "Backstage passes to a TAFKAL80ETC concert",
        0,
        30
      )
    );

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: -1, quality: 0 },
      { sellIn: -1, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("No modification on legendary objects", function () {
    listItems.push(new LegendaryObject("Sulfura", 80));
    listItems.push(new LegendaryObject("Iron throne", 500));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [{ quality: 80 }, { quality: 500 }];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
    });
  });

  //////////////////////////////////////////////////////////

  it("Minimum quality = 0", function () {
    listItems.push(new BasicProduct("+5 Dexterity Vest", 10, 0));
    listItems.push(new BasicProduct("Mana Cake", 45, 0));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 0 },
      { sellIn: 44, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //////////////////////////////////////////////////////////

  it("Maximum quality = 50", function () {
    listItems.push(new BetterQualityWithTime("Camembert", 15, 50));
    listItems.push(new BetterQualityWithTime("Tickets", 12, 50));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 14, quality: 50 },
      { sellIn: 11, quality: 50 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(listItems[idx].quality).toBe(testCase.quality);
      expect(listItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});
