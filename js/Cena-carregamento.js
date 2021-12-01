export class CenaCarregamento extends Phaser.Scene {
  constructor() {
    super({
      key: 'CenaLoad'
    })
  }

  preload() {
    const larguraJogo = this.sys.canvas.width

    const ProgressBar = this.add.graphics()
    this.load.on('progress', porcentagem => {
      ProgressBar.clear()
      ProgressBar.fillStyle(0xffffff, 1)
      ProgressBar.fillRect(10, 40, larguraJogo * porcentagem, 20)
    })

    this.load.on('complete', () => {
      this.scene.start('CenaJogo')
    })

    this.load.image('background', 'slot/images/bg.png')
    this.load.image('maquina', 'slot/images/frame.png')
    this.load.image('linha', 'slot/images/winline.png')
    this.load.image('maca', '/slot/images/symbols/apple.png')
    this.load.image('banana', '/slot/images/symbols/banana.png')
    this.load.image('bar', '/slot/images/symbols/bar.png')
    this.load.image('cereja', '/slot/images/symbols/cherry.png')
    this.load.image('uva', '/slot/images/symbols/grape.png')
    this.load.image('limao', '/slot/images/symbols/lemon.png')
    this.load.image('laranja', '/slot/images/symbols/orange.png')
    this.load.image('melancia', '/slot/images/symbols/watermellon.png')
    this.load.image('botaoAtivo', '/slot/images/buttons/play_button_1.png')
  }

  create() {}

  update() {}
}
