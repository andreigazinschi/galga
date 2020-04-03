sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.createProjectileFromSprite(img`
2 2 2 2 
`, Ship, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    Ship.startEffect(effects.fire, 100)
    info.changeLifeBy(-1)
})
let bad_guy: Sprite = null
let laser: Sprite = null
let Ship: Sprite = null
Ship = sprites.create(img`
. . . . . 8 . . . . . . . . 
. . . . . 8 8 . . . . . . . 
. . . . . 8 1 8 . . . . . . 
8 8 . . . 8 1 1 8 . . . . . 
8 8 8 8 8 8 1 1 1 8 8 8 8 . 
8 1 1 1 1 1 1 1 1 1 1 1 9 8 
8 8 8 8 8 8 1 1 1 1 1 1 9 8 
8 8 . . . 8 1 1 1 8 8 8 8 . 
. . . . . 8 1 1 8 . . . . . 
. . . . . 8 1 8 . . . . . . 
. . . . . 8 8 . . . . . . . 
. . . . . 8 . . . . . . . . 
`, SpriteKind.Player)
Ship.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(0)
controller.moveSprite(Ship, 125, 125)
game.onUpdateInterval(1000, function () {
    bad_guy = sprites.create(img`
. . . . . 9 9 9 . . . . . 
. . . . 9 9 9 9 9 . . . . 
. 7 7 7 9 9 9 9 9 7 7 7 . 
7 7 7 7 9 9 9 9 9 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 . 
. . . . 7 7 7 7 7 . . . . 
`, SpriteKind.Enemy)
    bad_guy.setVelocity(-100, 0)
    bad_guy.setPosition(180, Math.randomRange(10, 110))
})
