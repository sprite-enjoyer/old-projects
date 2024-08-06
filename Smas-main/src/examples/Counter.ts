import Component from "../SmasDOM/Component";
import tags from "../SmasDOM/HTMLTags";
import { SmasFnComponent } from "../types";
const { div, span, button } = tags;

const Counter: SmasFnComponent = function (this) {
  const state1 = this.stateful({ count: 0 });
  return div(
    {
      style: { border: "2px solid springgreen", display: "flex", gap: "5px", flexDirection: "row" },
      className: "something1 somethign2",
    },
    button({
      onclick: () => {
        state1.value = { count: state1.value.count + 1 };
      },
      textContent: "+",
    }),
    span({ textContent: `${state1.value.count}: COUNT, ` }),
    button({
      onclick: () => {
        // TODO
      },

      textContent: "-",
    })
  );
};

export default new Component(Counter, {});
