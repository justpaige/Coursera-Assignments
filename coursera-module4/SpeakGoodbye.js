//Coursera Module 4 Assignment speakgoodbye.js
(function(window){
  var speakWord = "Good Bye ";
  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {
      console.log(speakWord + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
