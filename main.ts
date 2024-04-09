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
basic.forever(function on_forever() {
    
    xp = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, -100, 100)
    yp = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, -100, 100)
    //  Is there a forward/backward component?
    serial.writeNumbers([xp, yp])
    if (Math.abs(yp) > 15) {
        radio.sendValue("FB", yp)
    } else {
        radio.sendNumber(0)
        radio.sendValue("FB", 0)
    }
    
    //  Is there a forward/backward component?
    if (Math.abs(xp) > 15) {
        radio.sendValue("FB", yp)
    } else {
        radio.sendNumber(0)
        radio.sendValue("FB", 0)
    }
    
})
