"use strict";
require("./style.css");
import MyModule from "./modules/MyModule.js";
import Component from "./content.js";

const myComp = new Component();
const app = document.createElement("div");

document.body.appendChild(app);
app.appendChild(myComp.msg);
app.appendChild(myComp.element);
