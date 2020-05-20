import Shop from "./shop.js";

class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

/////////////////////////////////////////

class BasicProduct extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}

	newDetails() {
		this.sellIn = this.sellIn - 1;

		if (this.quality > 0) {
			this.quality = this.quality - 1;
		}

		console.log(
			this.name +
				" have " +
				this.quality +
				" points at " +
				this.sellIn +
				" from expiry date "
		);
	}
}

class LegendaryObject extends Item {
	constructor(name, quality) {
		super(name, quality);
		this.quality = quality;
	}

	newDetails() {
		console.log(
			this.name +
				" will still have " +
				this.quality +
				" points for eternity "
		);
	}
}

class BetterQualityWithTime extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}

	newDetails() {
		this.sellIn = this.sellIn - 1;

		if (this.quality < 50) {
			this.quality = this.quality + 1;
		}

		console.log(
			this.name +
				" have " +
				this.quality +
				" points at " +
				this.sellIn +
				" from expiry date "
		);
	}
}

class Tickets extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}

	newDetails() {
		this.sellIn = this.sellIn - 1;

		if (this.quality < 50) {
			this.quality = this.quality + 1;

			if (this.sellIn < 11) {
				if (this.quality < 50) {
					this.quality = this.quality + 1;
				}
			}
			if (this.sellIn < 6) {
				if (this.quality < 50) {
					this.quality = this.quality + 1;
				}
			}
		}

		if (this.sellIn < 0) {
			this.quality = this.quality - this.quality;
		}

		console.log(
			this.name +
				" have " +
				this.quality +
				" points at " +
				this.sellIn +
				" from expiry date "
		);
	}
}

/////////////////////////////////////////

const updateQuality = (items) => {
	items.forEach((item) => {
		item.newDetails();
	});
};

const items = [
	new BasicProduct("Carotte", 50, 35),
	new LegendaryObject("Sulfura", 80),
	new BetterQualityWithTime("Brie", 50, 25),
	new Tickets("Backstage pour soirée DISCODISCO", 50, 5), // if sellIn > 11 = +1 par update
	new Tickets("Backstage pour soirée CHINERIE", 12, 5), // if sellIn < 11 && sellIn > 6 = +2 par update
	new Tickets("Backstage pour soirée BMP", 5, 5), // if sellIn < 11 &&  sellIn < 6 = +3 par update
	new Tickets("Backstage pour soirée CREATURES", 2, 5), // if sellIn < 0 = quality égal à 0
];

updateQuality(items);
updateQuality(items);
updateQuality(items);

export default {
	Item,
	BasicProduct,
};
