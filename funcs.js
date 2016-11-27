
var myAudioContext = null

function audioContext () {
  if (myAudioContext) {
    return myAudioContext
  } else {
    var AudioContext = window.AudioContext || window.webkitAudioContext
    myAudioContext = new AudioContext()
    return myAudioContext
  }
}

// Copy from http://webaudiodemos.appspot.com/TouchPad/index.html
// and http://webaudiodemos.appspot.com/TouchPad/js/audio.js
//
// request.onload = function() {
//   audioContext.decodeAudioData( request.response, function(buffer) {
//       technoBuffer = buffer;
//       appendOutput( "Sound ready." );
//   } );
// }

function requestSoundFile (url, onload) {
  if (!url) return
  if (!onload) return

  var request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.responseType = 'arraybuffer'
  request.onload = onload
  return request.send()
}

