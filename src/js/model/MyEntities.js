/**
 * @author Jörn Kreutel
 *
 * this skript defines the data types used by the application and the model operations for handling instances of the latter
 */

import {mwfUtils} from "vfh-iam-mwf-base";
import {EntityManager} from "vfh-iam-mwf-base";

/*************
 * example entity
 *************/

export class MyEntity extends EntityManager.Entity {

    // TODO-REPEATED: declare entity instance attributes

    constructor() {
        super();
    }

}

// TODO-REPEATED: add new entity class declarations here
export class MediaItem extends EntityManager.Entity {
	title;
	src;
	added = Date.now();
	description;

	constructor(title, src, description) {
		super();
		this.title = title;
		this.src = src;
		this.description = description;
	}

	get addedPP() {
		return new Date(this.added || new Date().now()).toLocaleDateString("de-DE");
	}
}

export function createRandomMediaItem() {
	const titles = [
		"Good Morning",
		"Stronger",
		"Champion",
		"Can't Tell Me Nothing",
		"Flashing Lights",
	];
	const descriptions = ["Kanye West"];
	const dims = [
		[100, 100],
		[50, 100],
		[150, 200],
		[200, 150],
		[400, 30],
	];

	const title = titles[Math.floor(Math.random() * titles.length)];
	const dim = dims[Math.floor(Math.random() * dims.length)];
	const description = descriptions[Math.floor(Math.random() * descriptions.length)];
	// const src = `https://picsum.photos/${dim[0]}/${dim[1]}`;
	const src = "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg";

	return new MediaItem(title, src, description);
}

