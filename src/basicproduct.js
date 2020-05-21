import Item from "./item";

class BasicProduct extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}

	newDetails() {
		this.sellIn = this.sellIn - 1;

		if (this.quality > 0) {
			this.quality = this.quality - 1;
		}

		if (this.sellIn < 0) {
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

export default BasicProduct;
