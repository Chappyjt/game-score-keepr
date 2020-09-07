input.onButtonPressed(Button.A, function () {
    Speler_a += 1
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (Speler_a == Speler_b) {
        basic.showString("Gelijk")
    } else {
    	
    }
    if (Speler_a > Speler_b) {
        basic.showString("A Wins")
    } else {
    	
    }
    if (Speler_a < Speler_b) {
        basic.showString("B Wins")
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    Speler_gelijk += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Speler_b += 1
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.clearScreen()
})
let Speler_a = 0
let Speler_b = 0
let Speler_gelijk = 0
Speler_b = 0
Speler_a = 0
basic.forever(function () {
	
})
