import Item from "./item";

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

export default LegendaryObject;
