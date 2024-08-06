import { HTMLTagToSmasNodeMap } from "../types";
import SmasNode from "./SmasNode";

type SmasNodeParams<TagName extends keyof HTMLElementTagNameMap> = ConstructorParameters<typeof SmasNode<TagName>>;

export function CurriedSmasNodeConstructor<TagName extends keyof HTMLElementTagNameMap>(
  tagName: SmasNodeParams<TagName>[0]
) {
  type SNP = SmasNodeParams<TagName>;
  return (options?: SNP[1], ...children: SNP[2][]) =>
    new SmasNode(tagName, options, ...children);
}

const HTMLTags = new Proxy(
  {},
  {
    get: (_target, p: keyof HTMLElementTagNameMap) => {
      const curriedSmasNode = CurriedSmasNodeConstructor(p);
      if (document.createElement(p) instanceof HTMLUnknownElement) throw new Error("unknown tag imported from tags!");
      return curriedSmasNode;
    },
  }
) as HTMLTagToSmasNodeMap;

export default HTMLTags;
