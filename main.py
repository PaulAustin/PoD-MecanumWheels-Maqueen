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
    if abs(yp) > 15:
        serial.write_numbers([xp, yp])
        radio.send_number(yp)
    else:
        serial.write_string("")
        radio.send_number(0)
basic.forever(on_forever)
