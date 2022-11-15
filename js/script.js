// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01/sw.js", {
    scope: "/ICS2O-Unit5-01/",
  })
}

// This constant generates a random number.
const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  // process of function
  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was: " +
      randomNumber +
      "! " +
      "Congratulations! You did it. " +
      "To Play Again, Please Restart The Page."
  }

  // executed block of code, when the first condition is true
  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was: " +
      randomNumber +
      "! " +
      "Sorry... " +
      "To Try Again, Please Restart The Page."
  }
}
