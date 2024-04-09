yp = 0
xp = 0
basic.show_leds("""
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    """)
serial.write_numbers([0, 0])

def on_forever():
    global xp, yp
    xp = Math.map(pins.analog_read_pin(AnalogPin.P1), 0, 1023, -100, 100)
    yp = Math.map(pins.analog_read_pin(AnalogPin.P2), 0, 1023, -100, 100)
    
    # Is there a forward/backward component?
    serial.write_numbers([xp, yp])
    if abs(yp) > 15:
        radio.send_value("FB", yp)
    else:
        radio.send_number(0)
        radio.send_value("FB", 0)

    # Is there a forward/backward component?
    if abs(xp) > 15:
        radio.send_value("FB", yp)
    else:
        radio.send_number(0)
        radio.send_value("FB", 0)




basic.forever(on_forever)
