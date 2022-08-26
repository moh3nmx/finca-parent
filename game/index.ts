import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import BaseBlock from "./components/BaseBlock";
import SimpleBlock from "./components/SimpleBlock";

class Boot extends Phaser.Scene {

	camera1: Phaser.Cameras.Scene2D.Camera | undefined;
	constructor() {
		super("Boot");
	}

	preload() {
		console.log('index preload');
		this.load.pack("pack", preloadAssetPackUrl);
	}

	create() {
		this.scene.start("Preload");
	}
}

export const loadLevel = (): void => {
	const game = new Phaser.Game({
		parent: 'game',
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: "#2f2f2f",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, Level],
		physics: {
			default: "arcade"
		}
	});

	game.scene.start("Boot");

	BaseBlock.emptyContainer = <HTMLElement>document.getElementById('empty-container');
	BaseBlock.rightContainer = <HTMLElement>document.getElementById('right-container');
	let container = new SimpleBlock("first-block", "simple");
}