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
}

export function createRandomMediaItem() {
	const titles = ["Arıyo", "Snap", "KTS", "Durma", "Intro", "Yaşanacaksa", "Zamansızdık"];
	const descriptions = ["Manifest"];
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
	const src = "https://images.genius.com/38519c80c880dcd738bd3fde789abd40.1000x1000x1.png";

	return new MediaItem(title, src, description);
}

