basic.showIcon(IconNames.Yes)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
})
