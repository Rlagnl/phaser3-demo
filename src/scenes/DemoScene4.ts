import CONSTS from '../shared/consts'
import Container = Phaser.GameObjects.Container
import Rectangle = Phaser.Geom.Rectangle
import GameScene from './GameScene'

export default class DemoScene4 extends GameScene {
	public constructor() {
		super({ key: 'DemoScene4' })
	}

	public init(): void { }

	public create($data): void {
		super.create($data)
		// 背景
		this.setBackgroundColor(0x4FA437)

		// block
		const block = this.add.graphics()
		block.fillStyle(0x000000, 1)
		block.fillRect(0, 0, 50, 50)

		// 容器
		const container = this.add.container(0, 200, []).setSize(CONSTS.DESIGN_WIDTH, 200)
		this.drawBackground(container)

		// 容器设置点击事件
		container.setInteractive(this.getTouchArea(container))
		container.on('pointerdown', () => {
			container.add(block)
		}, this)
	}

	// 绘制场景边界
	private drawSceneBorder() {
		// 获取布局属性
		const lr = this.camera.getLayoutRect()
		// 边框
		const graphics = this.add.graphics()
		graphics.lineStyle(1, 0xA85438, 1)
		graphics.strokeRect(0, 0, lr.width, lr.height)
	}

	// 绘制边框
	private drawBackground($object: Container): void {
		//
		const graphics = this.add.graphics()
		graphics.fillStyle(0xffffff, 1)
		graphics.fillRect(0, 0, $object.width, $object.height)
		// 将图形放入容器
		$object.add(graphics)
	}

	private getTouchArea($object: Container): any {
		const _r = new Rectangle(0, 0, $object.width, $object.height)
		_r.setPosition(_r.centerX, _r.centerY)
		return {
			cursor: 'pointer',
			hitArea: _r,
			hitAreaCallback: Rectangle.Contains
		}
	}

	protected transitionAnimate(duration: number): void {
		const cr = this.camera.getCameraRect()
		const size = Math.ceil((cr.width * cr.height) / 2500)
		const width = Math.ceil(cr.width / 50)

		// @ts-ignore
		const blocks = this.add.group({ key: 'effectBlock', repeat: size, setScale: { x: 1, y: 1 } });

		Phaser.Actions.GridAlign(blocks.getChildren(), {
			width,
			cellWidth: 50,
			cellHeight: 50,
			x: 25 + cr.x,
			y: 25 + cr.y
		});

		const _this = this;
		let i = 0;

		blocks.children.iterate(function (child) {
			_this.tweens.add({
				targets: child,
				scaleX: 0,
				scaleY: 0,
				angle: 180,
				_ease: 'Sine.easeInOut',
				ease: 'Power2',
				duration: 1000,
				delay: i * 50,
			});

			i++;
			if (i % width === 0) {
				i = 0;
			}
		});
	}
}
