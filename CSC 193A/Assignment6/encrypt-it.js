/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");

    let button = document.getElementById("encrypt-it");
    button.addEventListener("click", handleClick);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  function handleClick(){
    console.log("Encrypt Button Clicked!");
    let input = document.getElementById("input-text");
    let output = document.getElementById("result");

    let encrypted = shiftCipher(input.value);
    
    output.textContent = encrypted;
  }

  function handleReset(){
    document.getElementById("input-text").value = "";
  }

  function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
  } 
})();
