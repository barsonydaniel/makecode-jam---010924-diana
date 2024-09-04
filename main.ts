sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite4, otherSprite) {
    if (currentLevel == 1) {
        music.baDing.play()
        info.changeScoreBy(1)
        otherSprite.destroy()
    }
    if (currentLevel == 2) {
        music.baDing.play()
        otherSprite.destroy()
        info.changeScoreBy(1)
    }
    if (currentLevel == 3) {
        music.baDing.play()
        info.changeScoreBy(1)
        otherSprite.destroy()
    }
})
// On level 1
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currentLevel == 1) {
        if (main_Character.vy == 0) {
            main_Character.vy = -150
        }
    }
})
// Function running the levels
function StartLevel () {
    if (main_Character) {
        main_Character.destroy()
    }
    main_Character = sprites.create(assets.image`mainSprite`, SpriteKind.Player)
    controller.moveSprite(main_Character, 100, 100)
    if (currentLevel == 0) {
        level0()
    } else if (currentLevel == 1) {
        level1()
    }
    tiles.placeOnRandomTile(main_Character, sprites.builtin.forestTiles0)
    for (let value of tiles.getTilesByType(sprites.builtin.forestTiles0)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    if (currentLevel == 2) {
        level2()
    } else if (currentLevel == 3) {
        level3()
    }
}
function goBackHome () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    if (main_Character) {
        main_Character.destroy()
    }
    currentLevel = 0
    story.cancelAllCutscenes()
    scroller.scrollBackgroundWithSpeed(0, 0)
    scroller.setBackgroundScrollOffset(0, 0)
    main_Character = sprites.create(assets.image`mainSprite`, SpriteKind.Player)
    controller.moveSprite(main_Character, 100, 100)
    StartLevel()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite6, location5) {
    if (info.score() >= 1) {
        isCompleteLv3 = 1
        music.magicWand.play()
        game.splash("CONGRATS!", "OPN1SW (S-cone) collected!")
        goBackHome()
    } else {
        music.wawawawaa.play()
        game.splash("Game Over")
        goBackHome()
    }
})
function level1 () {
    color.setPalette(
    color.Deuteranopia
    )
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`level6`)
    info.showScore(true)
game.showLongText("Deuteranopia refers to RED/ GREEN colour blindness.", DialogLayout.Bottom)
    game.showLongText("This is due to defective or missing medium-wavelength cones (M-cones) in genes.", DialogLayout.Bottom)
    game.showLongText("Press (A) to start collecting the missing green cones!", DialogLayout.Bottom)
    music.playMelody("A F E F D G E F ", 240)
    main_Character.ay = 350
    controller.moveSprite(main_Character, 100, 0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Intro_Red_Code`, function (sprite, location) {
    currentLevel += 2
    story.startCutscene(function () {
        StartLevel()
        tiles.placeOnRandomTile(main_Character, sprites.builtin.forestTiles0)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite5, location4) {
    isCompleteLv1 = 1
    music.magicWand.play()
    game.splash("CONGRATS!", "OPN1MW (M-cone) collected!")
    goBackHome()
})
function startProjectiles () {
    while (currentLevel == 2) {
        projectile3 = sprites.createProjectileFromSide(assets.image`OPN1SW`, -90, 0)
        projectile3.y += randint(15, 105)
        projectile3.setKind(SpriteKind.Enemy)
        pause(500)
        projectile = sprites.createProjectileFromSide(assets.image`OPN1LW`, -90, 0)
        projectile.y = randint(5, 115)
        pause(100)
        projectile2 = sprites.createProjectileFromSide(assets.image`OPN1MW`, -90, 0)
        projectile2.y += randint(15, 105)
        projectile2.setKind(SpriteKind.Enemy)
        pause(500)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite5, location4) {
    music.wawawawaa.play()
    game.splash("Game Over")
    goBackHome()
})
function level3 () {
    main_Character.destroy()
    color.setPalette(
    color.Tritanopia
    )
    tiles.setCurrentTilemap(tilemap`level4_Orange`)
    game.showLongText("Tritanopia refers to BLUE/ YELLOW colour blindness.", DialogLayout.Bottom)
    game.showLongText("This is due to either defective or missing short-wavelength (S-cones) in genes.", DialogLayout.Bottom)
    game.showLongText("Press (A) to start collecting the blue cones!", DialogLayout.Bottom)
    music.playMelody("A F E F D G E F ", 240)
    main_Character = sprites.create(assets.image`mainSprite`, SpriteKind.Player)
    tiles.placeOnTile(main_Character, tiles.getTileLocation(1, 0))
    controller.moveSprite(main_Character)
    scene.cameraFollowSprite(main_Character)
    info.startCountdown(100)
    info.showScore(true)
}
// Countdown for level 2
info.onCountdownEnd(function () {
    if (currentLevel == 3) {
        music.wawawawaa.play()
        game.splash("Game Over")
        goBackHome()
    }
})
function level2 () {
    scene.setBackgroundImage(assets.image`gene`)
    tiles.setCurrentTilemap(tilemap`level10`)
    color.setPalette(
    color.Protanopia
    )
    scroller.scrollBackgroundWithSpeed(-50, 0)
    scene.cameraFollowSprite(null)
    game.showLongText("Protanopia is a colour blindness resulting from insensitivity to red light", DialogLayout.Bottom)
    game.showLongText("This is due to defective or missing long-wavelength cones (L-cones) in genes.", DialogLayout.Bottom)
    game.showLongText("Press (A) to start collecting the missing red cones!", DialogLayout.Bottom)
    music.playMelody("A F E F D G E F ", 240)
    controller.moveSprite(main_Character, 50, 100)
    main_Character.setStayInScreen(true)
    info.startCountdown(30)
    info.setLife(3)
    info.showScore(true)
startProjectiles()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Intro_Green_Cone`, function (sprite3, location3) {
    currentLevel += 1
    story.startCutscene(function () {
        StartLevel()
        tiles.placeOnRandomTile(main_Character, sprites.builtin.forestTiles0)
    })
})
info.onScore(1, function () {
    if (currentLevel == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        isCompleteLv2 = 1
        music.magicWand.play()
        game.splash("CONGRATS!", "OPN1LW (L-cone) collected!")
        goBackHome()
    }
})
info.onScore(-1, function () {
    if (currentLevel == 3) {
        music.wawawawaa.play()
        game.splash("Game Over")
        goBackHome()
    }
})
function level0 () {
    scene.cameraFollowSprite(null)
    info.setLife(null)
    info.setScore(null)
    info.stopCountdown()
    info.showScore(false)
Title = sprites.create(assets.image`mainTiitle`, SpriteKind.Text)
    if (isCompleteLv1 == 1 && isCompleteLv2 == 1 && isCompleteLv3 == 1) {
        color.startFade(color.GrayScale, color.originalPalette, 1500)
        scene.setBackgroundImage(assets.image`mainBackground`)
        tiles.setCurrentTilemap(tilemap`level1`)
        Title.setPosition(90, 25)
        ending()
    } else {
        color.setPalette(
        color.GrayScale
        )
        scene.setBackgroundImage(assets.image`mainBackground`)
        tiles.setCurrentTilemap(tilemap`level5`)
        Title.setPosition(90, 40)
    }
}
// Function running the instructions/ intro of the game.
function Intro () {
    Title = sprites.create(assets.image`Header0`, SpriteKind.Text)
    Title.setPosition(78, 53)
    Title.scale += 0.4
    scene.setBackgroundImage(assets.image`mainBackground`)
    main_Character = sprites.create(assets.image`mainSprite`, SpriteKind.Projectile)
    main_Character.setPosition(0, 0)
    eyeballSpeed = 50
    directionX = 1
    directionY = 0
    main_Character.setStayInScreen(true)
    textSprite = textsprite.create("Press A to start")
    textSprite.setPosition(76, 91)
    textSprite.setOutline(1, 15)
}
info.onLifeZero(function () {
    if (currentLevel == 2) {
        music.wawawawaa.play()
        game.splash("Game Over")
        goBackHome()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite7, otherSprite2) {
    if (currentLevel == 2) {
        music.buzzer.play()
        otherSprite2.destroy()
        info.changeLifeBy(-1)
    }
    if (currentLevel == 3) {
        music.buzzer.play()
        info.changeScoreBy(-1)
        otherSprite2.destroy()
    }
})
function introMessage () {
    sprites.destroy(Title)
    sprites.destroy(textSprite)
    scene.setBackgroundImage(assets.image`introBackground`)
    game.setDialogFrame(assets.image`introMessageFrame`)
    game.setDialogTextColor(1)
    game.showLongText("In this retro world, colour isn't just for show - it's the key to victory! You'll traverse a pixelated journey through the eyes of those with deuteranopia, protanopia, and tritanopia.", DialogLayout.Full)
    game.showLongText("Your mission will be collecting the missing cone cells and restore colour to the world! Get ready to transform the way you see colour! ", DialogLayout.Full)
    introEyeIsAnimated = 0
    game.setDialogFrame(assets.image`myImage6`)
    game.setDialogTextColor(15)
    goBackHome()
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Intro_Blue_Cone`, function (sprite2, location2) {
    currentLevel += 3
    story.startCutscene(function () {
        StartLevel()
        tiles.placeOnRandomTile(main_Character, sprites.builtin.forestTiles0)
    })
})
function ending () {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    game.splash("Thank you!", "Made by Canace & Diana")
    game.setDialogFrame(assets.image`introMessageFrame`)
    game.setDialogTextColor(1)
    game.showLongText("Special thanks to Daniel, Bridget and Kourosh. ", DialogLayout.Full)
    game.reset()
}
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite5: Sprite = null
let textSprite: TextSprite = null
let directionY = 0
let directionX = 0
let eyeballSpeed = 0
let Title: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let projectile3: Sprite = null
let main_Character: Sprite = null
let currentLevel = 0
let introEyeIsAnimated = 0
let isCompleteLv3 = 0
let isCompleteLv2 = 0
let isCompleteLv1 = 0
isCompleteLv1 = 0
isCompleteLv2 = 0
isCompleteLv3 = 0
introEyeIsAnimated = 1
Intro()
forever(function () {
    if (currentLevel == 1) {
        for (let value4 of tiles.getTilesByType(assets.tile`myTile3`)) {
            mySprite5 = sprites.create(assets.image`myImage4`, SpriteKind.Projectile)
            tiles.placeOnTile(mySprite5, value4)
            tiles.setTileAt(value4, assets.tile`myTile33`)
        }
    }
})
forever(function () {
    if (currentLevel == 3) {
        for (let value2 of tiles.getTilesByType(assets.tile`myTile26`)) {
            mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Projectile)
            tiles.placeOnTile(mySprite2, value2)
            tiles.setTileAt(value2, assets.tile`Pink`)
        }
        for (let value22 of tiles.getTilesByType(assets.tile`myTile23`)) {
            mySprite3 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
            tiles.placeOnTile(mySprite3, value22)
            tiles.setTileAt(value22, assets.tile`Pink`)
        }
        for (let value3 of tiles.getTilesByType(assets.tile`TestTile3`)) {
            mySprite4 = sprites.create(assets.image`GreenCone`, SpriteKind.Enemy)
            tiles.placeOnTile(mySprite4, value3)
            tiles.setTileAt(value3, assets.tile`Pink`)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (introEyeIsAnimated == 1) {
        if (directionX == 1 && directionY == 0) {
            main_Character.setVelocity(eyeballSpeed * directionX, eyeballSpeed * directionY)
            if (main_Character.x >= scene.screenWidth() - main_Character.width) {
                directionX = 0
                directionY = 1
            }
        } else if (directionX == 0 && directionY == 1) {
            main_Character.setVelocity(eyeballSpeed * directionX, eyeballSpeed * directionY)
            if (main_Character.y >= scene.screenHeight() - main_Character.height) {
                directionX = -1
                directionY = 0
            }
        } else if (directionX == -1 && directionY == 0) {
            main_Character.setVelocity(eyeballSpeed * directionX, eyeballSpeed * directionY)
            if (main_Character.x <= 0 + main_Character.width) {
                directionX = 0
                directionY = -1
            }
        } else {
            main_Character.setVelocity(eyeballSpeed * directionX, eyeballSpeed * directionY)
            if (main_Character.y <= 0 + main_Character.height) {
                directionX = 1
                directionY = 0
            }
        }
        if (controller.A.isPressed()) {
            introMessage()
        }
    }
})
