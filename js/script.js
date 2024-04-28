// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * this function find movie type based on user age
 */
function findMovietype() {
  // input
  const userAge = parseFloat(document.getElementById("user-age").value)

  // process
  if (userAge >= 17) {
    // output
    document.getElementById("result").innerHTML = "You can see an R movie alone"
  } else if (userAge >= 13) {
    // output
    document.getElementById("result").innerHTML = "You can see a PG-13 movie alone"
  } else if (userAge >= 5) {
    // output
    document.getElementById("result").innerHTML = "You can see a G or PG movie alone"
  } else {
    // output
    document.getElementById("result").innerHTML = "You are too young for most movie"
  }
}
