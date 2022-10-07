input.onButtonPressed(Button.A, function () {
    while (true) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1200, 255, 0, 3000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.stopAllSounds()
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # .
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . .
            # # . . .
            # . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            # # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
