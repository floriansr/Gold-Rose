import Item from "./item";

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

export default Tickets;
