// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const userAge = document.getElementById("user-age").value
  const userDay = document.getElementById("day").value

  // proces
  if ((userDay == "2" || userDay == "3") || (userAge > 12 && age < 21)) {
    // Display the number
    document.getElementById("answer").innerHTML = "<p>You're eligible for student pricing !</p>"
  } else{
    document.getElementById("answer").innerHTML = "<p>You must pay regular price !</p>"
}
}
