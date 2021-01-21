import GameScene from './GameScene'

export default class DemoScene3 extends GameScene {
	public constructor() {
		super({ key: 'DemoScene3' })
	}

	public init(): void {
		console.log('this.game', this.game)
	}

	public create($data): void {
		super.create($data)
		// 背景
		this.setBackgroundColor(0xC6393C)

		// 图片
		const image = this.add.image(120, 70, 'logo').setOrigin(0, 0)

		// 物理图片
		var shapes = this.cache.json.get('loglJson')
		this.matter.add.image(250, 400, 'logo').setBody(shapes.characters)

		// 图形
		const graphic = this.add.graphics();
		graphic.lineStyle(1, 0x50B03B, 1);
		graphic.strokeRect(image.x, image.y, image.displayWidth, image.displayHeight);
	}
}
