import image from '@/assets/images/characters.png'
import effectBlock from '@/assets/images/50x50.png'
import redbar from '@/assets/images/redbar.png'
import bluebar from '@/assets/images/bluebar.png'
import loglJson from '@/assets/sprites/logo.json'
import knightSprite from '@/assets/sprites/knight.png'
import knightJson from '@/assets/sprites/knight.json'
import overture from '@/assets/audio/overture.mp3'
import wormhole from '@/assets/video/wormhole.mp4'
export default class LoadScene extends Phaser.Scene {
	public constructor() {
		super({ key: 'LoadScene' })
	}

	public init($data): void { }

	public preload(): void {
		this.load.image('logo', image)
		this.load.image('effectBlock', effectBlock);
		this.load.image('redbar', redbar);
		this.load.image('bluebar', bluebar);
		this.load.json('loglJson', loglJson);
		this.load.atlas('knight', knightSprite, knightJson);
		this.load.spine('raptor', '/static/spines/raptor-pro.json', '/static/spines/raptor-pro.atlas', true);
		this.load.audio('overture', [overture])
		this.load.video('wormhole', wormhole)
	}

	public create(): void {
		// 图片
		// this.add.image(0, 0, 'logo').setOrigin(0, 0)


		this.scene.start('MenuScene')
		const index = this.scene.getIndex(this)
		const scenes = this.scene.manager.getScenes(false)
		const next = scenes[index + 1].scene.key
		this.scene.start(next, { duration: 500 })
	}

	public update(): void { }
}
