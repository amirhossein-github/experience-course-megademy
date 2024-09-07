import { render } from './render.js';
import { controller } from "./controller.js";

render()

document.body.addEventListener('keydown', controller)
document.body.addEventListener('mouseover', controller)
document.body.addEventListener('mouseout', controller)