# On level 1

def on_up_pressed():
    if main_Character.vy == 0:
        main_Character.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

# Function running the levels
def StartLevel():
    global main_Character, Title
    if main_Character:
        main_Character.destroy()
    main_Character = sprites.create(assets.image("""
        mainSprite
    """), SpriteKind.player)
    controller.move_sprite(main_Character, 100, 100)
    if currentLevel == 0:
        colourChangeDeuteranopia(6)
        Title = sprites.create(assets.image("""
            mainTiitle
        """), SpriteKind.text)
        Title.set_position(90, 40)
        tiles.set_current_tilemap(tilemap("""
            level5
        """))
    elif currentLevel == 1:
        color.set_palette(color.original_palette)
        scene.set_background_image(img("""
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
        """))
        tiles.set_current_tilemap(tilemap("""
            level6
        """))
        game.show_long_text("Deuteranopia refers to RED/ GREEN colour blindness.",
            DialogLayout.BOTTOM)
        game.show_long_text("This is due to defective or missing medium-wavelength cones (M-cones) in genes.",
            DialogLayout.BOTTOM)
        game.show_long_text("Press (A) to start collecting the missing genes!",
            DialogLayout.BOTTOM)
        music.play_melody("A F E F D G E F ", 240)
        main_Character.ay = 350
        controller.move_sprite(main_Character, 100, 0)
    elif currentLevel == 2:
        scene.set_background_image(assets.image("""
            gene
        """))
        tiles.set_current_tilemap(tilemap("""
            level10
        """))
        color.set_palette(color.protanopia)
        scroller.scroll_background_with_speed(-50, 0)
    tiles.place_on_random_tile(main_Character, sprites.builtin.forest_tiles0)
    for value in tiles.get_tiles_by_type(sprites.builtin.forest_tiles0):
        tiles.set_tile_at(value, assets.tile("""
            transparency16
        """))
    scene.camera_follow_sprite(main_Character)
    if currentLevel == 2:
        scene.camera_follow_sprite(None)
        game.show_long_text("Protanopia is a colour blindness resulting from insensitivity to red light.",
            DialogLayout.BOTTOM)
        game.show_long_text("This is due to defective or missing long-wavelength cones (L-cones) in genes.",
            DialogLayout.BOTTOM)
        game.show_long_text("Press (A) to start collecting the missing genes!",
            DialogLayout.BOTTOM)
        music.play_melody("A F E F D G E F ", 240)
        controller.move_sprite(main_Character, 50, 100)
        main_Character.set_stay_in_screen(True)
        info.start_countdown(30)
        info.set_life(3)
    elif currentLevel == 3:
        main_Character.destroy()
        color.set_palette(color.tritanopia)
        tiles.set_current_tilemap(tilemap("""
            level4_Orange
        """))
        game.show_long_text("Tritanopia refers to BLUE/ YELLOW colour blindness.",
            DialogLayout.BOTTOM)
        game.show_long_text("This is due to either defective or missing short-wavelength (S-cones) in genes.",
            DialogLayout.BOTTOM)
        game.show_long_text("Press (A) to start collecting the missing genes!",
            DialogLayout.BOTTOM)
        music.play_melody("A F E F D G E F ", 240)
        main_Character = sprites.create(assets.image("""
            mainSprite
        """), SpriteKind.player)
        tiles.place_on_tile(main_Character, tiles.get_tile_location(1, 0))
        controller.move_sprite(main_Character)
        scene.camera_follow_sprite(main_Character)
        info.start_countdown(100)

def on_overlap_tile(sprite, location):
    global currentLevel
    currentLevel += 2
    
    def on_start_cutscene():
        StartLevel()
        tiles.place_on_random_tile(main_Character, sprites.builtin.forest_tiles0)
    story.start_cutscene(on_start_cutscene)
    
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Intro_Red_Code
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    global currentLevel
    currentLevel += 3
    
    def on_start_cutscene2():
        StartLevel()
        tiles.place_on_random_tile(main_Character, sprites.builtin.forest_tiles0)
    story.start_cutscene(on_start_cutscene2)
    
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Intro_Blue_Cone
    """),
    on_overlap_tile2)

def colourChangeDeuteranopia(colourValue: number):
    global initialColour
    if colourValue == 6:
        color.set_color(6, color.rgb(190, 217, 192))
        initialColour = colourValue

def on_overlap_tile3(sprite3, location3):
    global currentLevel
    currentLevel += 1
    
    def on_start_cutscene3():
        StartLevel()
        tiles.place_on_random_tile(main_Character, sprites.builtin.forest_tiles0)
    story.start_cutscene(on_start_cutscene3)
    
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Intro_Green_Cone
    """),
    on_overlap_tile3)

# Countdown for level 2

def on_countdown_end():
    if currentLevel == 2:
        if info.score() >= 1:
            music.magic_wand.play()
            game.splash("CONGRATS!", "OPN1LW (L-cone) collected!")
        else:
            music.wawawawaa.play()
            game.over(False, color.darken)
    if currentLevel == 3:
        music.wawawawaa.play()
        game.over(False, color.darken)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite4, otherSprite):
    if currentLevel == 1:
        music.ba_ding.play()
        info.change_score_by(1)
        otherSprite.destroy()
    if currentLevel == 2:
        music.ba_ding.play()
        otherSprite.destroy()
        info.change_score_by(1)
    if currentLevel == 3:
        music.ba_ding.play()
        info.change_score_by(1)
        otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_overlap_tile4(sprite5, location4):
    music.wawawawaa.play()
    game.over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile4)

# Function running the instructions/ intro of the game.
def Intro():
    game.set_dialog_frame(img("""
        ..66666666666666666666..
                .6699999999999999999966.
                669991111111111111199966
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                699911111111111111119996
                669991111111111111199966
                .6699999999999999999966.
                ..66666666666666666666..
    """))
    game.show_long_text("INTRO", DialogLayout.TOP)

def on_life_zero():
    if currentLevel == 2:
        music.wawawawaa.play()
        game.over(False, color.darken)
info.on_life_zero(on_life_zero)

def on_overlap_tile5(sprite6, location5):
    if info.score() >= 1:
        music.magic_wand.play()
        game.splash("CONGRATS!", "OPN1SW (S-cone) collected!")
    else:
        music.wawawawaa.play()
        game.over(False, color.darken)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile27
    """),
    on_overlap_tile5)

def on_on_overlap2(sprite7, otherSprite2):
    if currentLevel == 2:
        music.buzzer.play()
        otherSprite2.destroy()
        info.change_life_by(-1)
    if currentLevel == 3:
        music.buzzer.play()
        info.change_score_by(-1)
        otherSprite2.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

mySprite4: Sprite = None
mySprite3: Sprite = None
mySprite2: Sprite = None
mySprite5: Sprite = None
projectile2: Sprite = None
projectile: Sprite = None
projectile3: Sprite = None
initialColour = 0
Title: Sprite = None
main_Character: Sprite = None
currentLevel = 0
scene.set_background_image(assets.image("""
    mainBackground
"""))
currentLevel = 0
main_Character = sprites.create(assets.image("""
    mainSprite
"""), SpriteKind.player)
controller.move_sprite(main_Character, 100, 100)
StartLevel()

def on_forever():
    global projectile3, projectile, projectile2
    if currentLevel == 2:
        projectile3 = sprites.create_projectile_from_side(assets.image("""
            OPN1SW
        """), -90, 0)
        projectile3.y += randint(15, 105)
        projectile3.set_kind(SpriteKind.enemy)
        pause(500)
        projectile = sprites.create_projectile_from_side(assets.image("""
            OPN1LW
        """), -90, 0)
        projectile.y = randint(5, 115)
        pause(100)
        projectile2 = sprites.create_projectile_from_side(assets.image("""
            OPN1MW
        """), -90, 0)
        projectile2.y += randint(15, 105)
        projectile2.set_kind(SpriteKind.enemy)
        pause(500)
forever(on_forever)

def on_forever2():
    global mySprite5
    if currentLevel == 1:
        for value4 in tiles.get_tiles_by_type(assets.tile("""
            myTile3
        """)):
            mySprite5 = sprites.create(assets.image("""
                myImage4
            """), SpriteKind.projectile)
            tiles.place_on_tile(mySprite5, value4)
            tiles.set_tile_at(value4, assets.tile("""
                myTile33
            """))
forever(on_forever2)

def on_forever3():
    global mySprite2, mySprite3, mySprite4
    if currentLevel == 3:
        for value2 in tiles.get_tiles_by_type(assets.tile("""
            myTile26
        """)):
            mySprite2 = sprites.create(assets.image("""
                myImage1
            """), SpriteKind.projectile)
            tiles.place_on_tile(mySprite2, value2)
            tiles.set_tile_at(value2, assets.tile("""
                Pink
            """))
        for value22 in tiles.get_tiles_by_type(assets.tile("""
            myTile23
        """)):
            mySprite3 = sprites.create(assets.image("""
                myImage3
            """), SpriteKind.enemy)
            tiles.place_on_tile(mySprite3, value22)
            tiles.set_tile_at(value22, assets.tile("""
                Pink
            """))
        for value3 in tiles.get_tiles_by_type(assets.tile("""
            TestTile3
        """)):
            mySprite4 = sprites.create(assets.image("""
                GreenCone
            """), SpriteKind.enemy)
            tiles.place_on_tile(mySprite4, value3)
            tiles.set_tile_at(value3, assets.tile("""
                Pink
            """))
forever(on_forever3)
