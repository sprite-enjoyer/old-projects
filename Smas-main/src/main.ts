import Counter from "./examples/Counter";
import SmasDOM from "./SmasDOM/SmasDOM";

export const root = document.getElementById("root");
if (!root) throw new Error("root shouldn't be null!");

export const smasDOM = new SmasDOM(root);
smasDOM.render(Counter.render());
