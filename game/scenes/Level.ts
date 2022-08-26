
// You can write more code here

/* START OF COMPILED CODE */

import { World } from "matter";
import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	cursor!: Phaser.Types.Input.Keyboard.CursorKeys;

	constructor() {
		super("Level");
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {
		// fufuSuperDino
		const fufuSuperDino = this.add.image(426, 155, "FufuSuperDino");

		// background
		let background = this.add.image(0, 0, "background").setOrigin(0, 0);
		let xScale = window.innerWidth / background.width;
		let yScale = window.innerHeight / background.height;
		background.setScale(xScale, yScale);

		// fufuSuperDino (components)
		new PushOnClick(fufuSuperDino);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.cameras.main.setBounds(0, 0, window.innerWidth, window.innerHeight);
		this.cameras.main.centerOn(0, 0);
		this.cameras.main.setViewport(0, 0, window.innerWidth, window.innerHeight);
		this.editorCreate();

		this.cursor = this.input.keyboard.createCursorKeys();
	}

	update(time: number, delta: number): void {

		if(this.cursor.left.isDown)
		{
			console.log('left');
		}
		if(this.cursor.right.isDown)
		{
			console.log('right');
		}
		if(this.cursor.up.isDown)
		{
			console.log('up');
		}
		if(this.cursor.down.isDown)
		{
			console.log('down');
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
