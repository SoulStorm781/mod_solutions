// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function () {
  // STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // STEP 4: Rewrite the 'speak' function to be attached to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  // Name it 'helloSpeaker' on the global scope as well.
  window.helloSpeaker = helloSpeaker;

})();


// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
