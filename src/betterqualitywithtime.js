import Item from "./item";

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

export default BetterQualityWithTime;
