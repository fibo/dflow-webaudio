
var AudioContext = window.AudioContext || window.webkitAudioContext

var audioContext = new AudioContext()

var oscillator = audioContext.createOscillator()

var gain = audioContext.createGain()

gain.connect(audioContext.destination)

oscillator.start()

