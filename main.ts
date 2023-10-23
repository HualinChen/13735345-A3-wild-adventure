namespace SpriteKind {
    export const hehe = SpriteKind.create()
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    info.setLife(1)
    info.changeLifeBy(-1)
})
info.onScore(15, function () {
    music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.rings, 100)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeScoreBy(-1)
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
game.splash("Hi", "It's a Wild Adventure. ")
game.splash("Manipulate the bird to eat the strawberry!")
game.splash("Beware of stumps and demons! ", "Don't touch them.")
info.setLife(1)
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
let me = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
me,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(me)
info.startCountdown(100)
game.showLongText("I am so hungry! Help me to catch the food", DialogLayout.Bottom)
scene.cameraFollowSprite(mySprite)
game.setGameOverEffect(true, effects.hearts)
music.play(music.stringPlayable("C5 G A F D F G C ", 120), music.PlaybackMode.LoopingInBackground)
game.setGameOverPlayable(true, music.melodyPlayable(music.magicWand), true)
scene.cameraFollowSprite(mySprite)
for (let 值 of tiles.getTilesByType(assets.tile`myTile0`)) {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 4 5 5 5 5 f . . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 4 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 4 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 4 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
    tiles.placeOnTile(mySprite3, 值)
    tiles.setTileAt(值, sprites.castle.tileGrass2)
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 4 5 5 5 5 f . . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 4 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 4 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 4 4 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 4 5 5 5 5 f . . 
        . . . f 5 5 5 5 4 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 4 5 5 5 5 f . . 
        . . . f 5 5 5 5 4 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    mySprite3.setPosition(64, randint(10, 170))
}
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b b 1 b b b 1 b c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(5, 155), randint(5, 115))
    mySprite2.setVelocity(randint(5, 155), 0)
    mySprite2.setBounceOnWall(false)
})
game.onUpdateInterval(2000, function () {
    mySprite = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.Food)
    mySprite.setPosition(randint(5, 155), randint(5, 115))
    mySprite.setVelocity(randint(20, 30), 0)
    mySprite.setBounceOnWall(false)
})
