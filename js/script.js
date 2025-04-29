// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const userAge = document.getElementById("user-age").value
  const days = document.getElementsByName("day")


  // process
  if (($day == "Tuesday" || $day == "tuesday" || $day == "thursday" || $day == "Thursday") || ($age > 12 && $age < 21)) {
        document.getElementById("answer").innerHTML = "<h4>You're eligible for student pricing!</h4>"
        } else {
        document.getElementById("answer").innerHTML = "<h4>You must pay regular price!</h4>"
        }
      }