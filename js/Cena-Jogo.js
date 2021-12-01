export class CenaJogo extends Phaser.Scene {
  constructor() {
    super({
      key: 'CenaJogo'
    })
  }
  preload() {}

  create() {
    const width = this.scale.width
    const height = this.scale.height

    const background = this.add.image(0, 0, 'background')
    background.setOrigin(0, 0)
    const maquina = this.add.image(175, 175, 'maquina')
    maquina.setOrigin(0, 0).setDepth(1)
    const linha = this.add.image(210, 285, 'linha')
    linha.setOrigin(0, 0).setDepth(2)
    const text1 = this.add.text(190, 150, '', {
      font: '16px Arial',
      fill: '#000000'
    })
    const text2 = this.add.text(500, 150, '', {
      font: '16px Arial',
      fill: '#000000'
    })
    const text3 = this.add.text(380, 525, '', {
      font: '19px Arial',
      fill: '#ffffff'
    })
    const credito = 500
    const pontos = 0
    const button = this.add.image(350, 500, 'botaoAtivo')
    button.setDataEnabled()
    button.data.set('credito', credito)
    button.setOrigin(0, 0)

    text1.setText(['Balance' + ' ' + credito])
    text2.setText(['Winnings' + ' ' + pontos])
    text3.setText(['Play']).setDepth(1)

    const primeiraLinha = this.add
      .tileSprite(190, 240, 'maca')
      .setScrollFactor(0)
    const segundaLinha = this.add.image(460, 240, 'maca')
    const terceiraLinha = this.add.image(325, 240, 'maca')

    primeiraLinha.setOrigin(0, 0)
    segundaLinha.setOrigin(0, 0)
    terceiraLinha.setOrigin(0, 0)

    sprite = game.add.tileSprite(0, 0, 800, 600, 'maca')
    sprite.autoScroll(0, 200)
    this.game.world.scale.set(2)
  }

  update() {
    primeiraLinha.tilePosition.y += 2
  }
}
