import { CenaCarregamento } from './Cena-carregamento.js'
import { CenaJogo } from './Cena-Jogo.js'
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'principal',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 100
      },
      debug: false
    }
  },
  scene: [CenaCarregamento, CenaJogo]
}
const jogo = new Phaser.Game(config)
