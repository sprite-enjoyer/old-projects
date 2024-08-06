import Component from "./SmasDOM/Component";
import { CurriedSmasNodeConstructor } from "./SmasDOM/HTMLTags";
import SmasNode from "./SmasDOM/SmasNode";

export type SmasFnComponent<P extends Object = any, S extends Object = any> = (
  this: Component<P>,
  props?: P,
  state?: S
) => SmasNode<any>;

export type IsObject<T> = T extends object ? (T extends Function ? never : T) : never;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends IsObject<T[P]> ? DeepPartial<T[P]> : T[P];
};

export type SmasNodeOptions<TagName extends keyof HTMLElementTagNameMap> = DeepPartial<HTMLElementTagNameMap[TagName]>;

export type Test<TagName extends keyof HTMLElementTagNameMap> = {
  [Prop in keyof HTMLElementTagNameMap[TagName]]?: HTMLElementTagNameMap[TagName][Prop];
};

export type HTMLTagToSmasNodeMap = {
  [Key in keyof HTMLElementTagNameMap]: ReturnType<typeof CurriedSmasNodeConstructor<Key>>;
};
