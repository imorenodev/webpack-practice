"use strict";
module.exports = function() {
  const element = document.createElement("h1");
  const msg = document.createElement("p");

  element.innerHTML = "Hello world!! ZZ";
  msg.innerHTML = "SUPP"

  return {
    element: element,
    msg: msg
  }
};
