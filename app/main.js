"use strict";

require("./style.css");
const component = require("./content.js")();

document.body.appendChild(component.msg);
document.body.appendChild(component.element);
