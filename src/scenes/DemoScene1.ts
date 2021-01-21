import CONSTS from '../shared/consts'
import GameScene from './GameScene'

export default class DemoScene1 extends GameScene {
	public constructor() {
		super({ key: 'DemoScene1' })
	}

	public init($data): void { }

	public create($data): void {
		super.create($data)
		// 背景
		this.setBackgroundColor(0x009fcc)



		// const graphics = this.add.graphics()
		// graphics.lineStyle(3, 0xA85438, 1)
		// graphics.strokeRect(0, 0, CONSTS.DESIGN_WIDTH, CONSTS.DESIGN_HEIGHT)
	}
}
