basic.showIcon(IconNames.Yes)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
})
