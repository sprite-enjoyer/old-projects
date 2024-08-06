import Component from "./Component";
import SmasNode from "./SmasNode";

class SmasDOM<TagName extends keyof HTMLElementTagNameMap> {
  root: SmasNode<TagName>;

  constructor(root: HTMLElementTagNameMap[TagName]) {
    this.root = SmasNode.createFromSource(root.nodeName.toLowerCase() as TagName, root, {});
  }

  render(current: SmasNode<any> = this.root, prev: SmasNode<TagName> | null = this.root) {
    if (prev === this.root) prev.children.push(current);

    prev?.element.append(current.element);
    current.parent = prev ?? undefined;

    if (current.isLeaf) return;

    for (let i = 0; i < current.children.length; i++) {
      this.render(current.children[i], current);
    }
  }

  removeSmasNode<TagName extends keyof HTMLElementTagNameMap>(smasNode: SmasNode<TagName>) {
    if (smasNode && smasNode.parent) {
      smasNode.parent.children = smasNode.parent?.children.filter((child) => child !== smasNode);
    }

    smasNode.element.remove();
  }

  handleComponentUpdate(component: Component<any>, source: any) {
    if (component.renderResultMemento !== null) this.removeSmasNode(component.renderResultMemento);
    console.log(component.render);
    const parentSmasNode = component.renderResultMemento?.parent;
    const reRenderResult = component.render(component.props);
    reRenderResult.component = component;
    reRenderResult.isComponentRoot = true;

    this.render(reRenderResult, parentSmasNode);
  }
}

export default SmasDOM;
