class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export default Item;

// const items = [
// 	new BasicProduct("Carotte", 50, 35),
// 	new LegendaryObject("Sulfura", 80),
// 	new BetterQualityWithTime("Brie", 50, 25),
// 	new Tickets("Backstage pour soirée DISCODISCO", 50, 5), // if sellIn > 11 = +1 par update
// 	new Tickets("Backstage pour soirée CHINERIE", 12, 5), // if sellIn < 11 && sellIn > 6 = +2 par update
// 	new Tickets("Backstage pour soirée BMP", 5, 5), // if sellIn < 11 &&  sellIn < 6 = +3 par update
// 	new Tickets("Backstage pour soirée CREATURES", 2, 5), // if sellIn < 0 = quality égal à 0
// ];

// updateQuality(items);
// updateQuality(items);
// updateQuality(items);
