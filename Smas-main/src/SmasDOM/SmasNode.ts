import { SmasNodeOptions } from "../types";
import Component from "./Component";

class SmasNode<TagName extends keyof HTMLElementTagNameMap> {
  element: HTMLElementTagNameMap[TagName];
  parent?: SmasNode<any>;
  children: SmasNode<any>[] = [];
  tagName: TagName;
  options: SmasNodeOptions<TagName>;
  component: Component<any> | null = null;
  isComponentRoot = false;

  constructor(tagName: TagName, options?: SmasNodeOptions<TagName>, ...children: SmasNode<any>[]) {
    this.tagName = tagName;
    this.element = document.createElement<TagName>(tagName);
    this.options = { ...this.element, ...options };
    this.children.push(...children);

    Object.assign(this.element, this.options);
  }

  private setSource(source: HTMLElementTagNameMap[TagName]) {
    if (this.element.nodeName !== source.nodeName) throw new Error("node types don't match!");
    this.element = source;
    return this;
  }

  static createFromSource<TagName extends keyof HTMLElementTagNameMap>(
    tagName: TagName,
    source: HTMLElementTagNameMap[TagName],
    options?: SmasNodeOptions<TagName>,
    ...children: SmasNode<any>[]
  ) {
    return new SmasNode(tagName, options, ...children).setSource(source);
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  // Not sure this is correct
  clone() {
    if (this.isLeaf) {
      return new SmasNode<TagName>(this.tagName, this.options);
    }

    const newChildren: SmasNode<any>[] = this.children.map((child) => child.clone());
    return new SmasNode<TagName>(this.tagName, this.options, ...newChildren);
  }
}

export default SmasNode;
