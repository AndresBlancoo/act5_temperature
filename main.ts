input.onButtonPressed(Button.A, function () {
    basic.showNumber(celsius)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Kelvin = celsius + 273.15
    basic.showNumber(Kelvin)
    basic.showIcon(IconNames.Confused)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    farenheit = celsius * (9 / (5 + 32))
    basic.showNumber(farenheit)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
let farenheit = 0
let Kelvin = 0
let celsius = 0
basic.showString("Andres Blanco")
basic.showString("A01285330")
celsius = input.temperature()
basic.forever(function () {
	
})
