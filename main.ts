input.onButtonPressed(Button.A, function () {
    if (cursorX > 0) {
        led.unplot(cursorX, CursorY)
        cursorX = cursorX - 1
        led.plot(cursorX, CursorY)
    } else {
        if (CursorY > 0) {
            led.unplot(cursorX, CursorY)
            CursorY = CursorY - 1
            led.plot(cursorX, CursorY)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Score)
    basic.clearScreen()
    basic.pause(200)
    led.plot(cursorX, CursorY)
    led.plot(TargetX, TargetY)
})
input.onButtonPressed(Button.B, function () {
    if (cursorX < 4) {
        led.unplot(cursorX, CursorY)
        cursorX = cursorX + 1
        led.plot(cursorX, CursorY)
    } else {
        if (CursorY < 4) {
            led.unplot(cursorX, CursorY)
            CursorY = CursorY + 1
            led.plot(cursorX, CursorY)
        }
    }
})
let Score = 0
let TargetY = 0
let TargetX = 0
let CursorY = 0
let cursorX = 0
cursorX = 2
CursorY = 2
TargetX = randint(0, cursorX)
TargetY = randint(0, CursorY)
Score = 0
led.plot(TargetX, TargetY)
led.plot(cursorX, CursorY)
basic.forever(function () {
    if (cursorX == TargetX) {
        if (CursorY == TargetY) {
            Score = Score + 1
            basic.showString("WIN!")
            TargetX = randint(0, 4)
            TargetY = randint(0, 4)
            led.plot(TargetX, TargetY)
        }
    }
})
