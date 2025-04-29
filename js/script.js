// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const userAge = document.getElementById("user-age").value
  const days = document.getElementsByName("day")
  const tuesday = days[1].checked  // Tuesday is index 1
  const thursday = days[3].checked // Thursday is index 3

  // process
  if ((tuesday || thursday) || (userAge > 12 && userAge < 21)) {
    document.getElementById("answer").innerHTML = "<p>You're eligible for student pricing!</p>"
  } else {
    document.getElementById("answer").innerHTML = "<p>You must pay regular price!</p>"
  }
}
