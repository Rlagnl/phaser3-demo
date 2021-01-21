import CONSTS from '../shared/consts'
import BaseScene from './BaseScene'
import Rectangle = Phaser.Geom.Rectangle
export default class MenuScene extends BaseScene {
	public constructor() {
		super({ key: 'MenuScene' })
	}

	public init(): void { }

	public create(): void {
		// 初始化适配
		const _r = new Rectangle(0, 0, CONSTS.DESIGN_WIDTH, CONSTS.DESIGN_HEIGHT)
		this.initCamera(CONSTS.WINDOW_WIDTH, CONSTS.WINDOW_HEIGHT, _r)
		// 获取摄像机属性
		const cr = this.camera.getCameraRect()
		// 获取场景列表
		const scenes = this.scene.manager.getScenes(false)
		// 遍历场景列表，生成导航栏
		for (let i = 1; i < scenes.length - 1; i++) {
			const name = scenes[i].scene.key
			this.createOption(cr.x + 20, cr.y + 20 + i * 40, name, () => {
				this.changeScene(name)
			})
		}
	}

	private changeScene($scene: string): void {
		const scenes = this.scene.manager.getScenes(true).filter(e => e !== this)
		const current = scenes[0].scene.key
		if (current === $scene) return
		const duration = 500
		this.scene.moveAbove(current, $scene)
		this.scene.bringToTop(this.scene.key)
		this.scene.pause(current)
		this.scene.run($scene, { duration })
		setTimeout(() => {
			this.scene.stop(current)
		}, duration + 100)
	}

	private createOption($x: number, $y: number, $text: string, $fn: Function): Phaser.GameObjects.Text {
		const _item = this.add.text($x, $y, $text).setResolution(3)
		_item.setInteractive({ cursor: 'pointer' }).on('pointerdown', $fn)
		return _item
	}
}
