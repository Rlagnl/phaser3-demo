import GameScene from './GameScene'

export default class DemoScene2 extends GameScene {
	public constructor() {
		super({ key: 'DemoScene2' })
	}

	public init(): void { }

	public create($data): void {
		super.create($data)
		// 背景
		this.setBackgroundColor(0xB8623D)

		// 图片
		this.add.image(180, 120, 'logo')

		// 文字
		this.add.text(150, 270, 'hello world', { color: 'red' })

		// 图形
		const graphic = this.add.graphics();

		graphic.lineStyle(2, 0xffff00, 1);
		graphic.strokeRect(100, 350, 50, 50);
		graphic.strokeRoundedRect(200, 350, 50, 50, 20);
		graphic.strokeCircle(325, 375, 25)

		graphic.fillStyle(0xffff00, 1);
		graphic.fillRect(100, 450, 50, 50);
		graphic.fillRoundedRect(200, 450, 50, 50, 20);
		graphic.fillCircle(325, 475, 25)
	}
}
