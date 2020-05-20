import Item from "./item";

class Conjured extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}

	newDetails() {
		this.sellIn = this.sellIn - 1;

		if (this.quality > 0) {
			this.quality = this.quality - 2;
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

export default Conjured;
