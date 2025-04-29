// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const userAge = document.getElementById("user-age").value
  const days = document.getElementById("user-date").value


  // process
  if ((days == "Tuesday" || days == "tuesday" || days == "thursday" || days == "Thursday") || (userAge > 12 && userAge < 21)) {
        document.getElementById("answer").innerHTML = "<h4>You're eligible for student pricing!</h4>"
        } else {
        document.getElementById("answer").innerHTML = "<h4>You must pay regular price!</h4>"
        }
      }
      