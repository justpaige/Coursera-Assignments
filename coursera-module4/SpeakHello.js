//Module 4 Assignment speakhello.js
(function(window){
  var speakWord = "Hello ";
  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
      console.log(speakWord + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
