let yp = 0
let xp = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
serial.writeNumbers([0, 0])
basic.forever(function () {
    xp = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, -100, 100)
    yp = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, -100, 100)
    if (Math.abs(yp) > 15) {
        serial.writeNumbers([xp, yp])
        radio.sendNumber(yp)
    } else {
        serial.writeString("")
        radio.sendNumber(0)
    }
})
