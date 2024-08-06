import { smasDOM } from "../main";
import Observable from "../reactivity/Observable";
import Observer from "../reactivity/Observer";
import { SmasFnComponent } from "../types";
import SmasNode from "./SmasNode";

interface SmasState<T> {
  initialValue: T;
  value: T;
}

class Component<P extends Object> {
  state = new Set<Observable<SmasState<any>>>();
  props: P;
  render: SmasFnComponent<P>;
  stateful: (value: any) => any;
  renderResultMemento: SmasNode<any> | null = null;

  constructor(rawRenderFn: SmasFnComponent<P>, props: P) {
    this.props = props;
    this.render = this.applyMiddlewareToRawRenderFn(rawRenderFn);
    const observerComponent = new Observer<typeof this, any>(this, (s) => {
      smasDOM.handleComponentUpdate(this, s);
    });
    this.stateful = function (value: any) {
      const state = new Observable({ initialValue: value, value });
      state.addWatcher(observerComponent);
      this.state.add(state);
      return state.proxy;
    };
    return observerComponent.observer;
  }

  private applyMiddlewareToRawRenderFn(render: SmasFnComponent<P>) {
    return (props?: P, state?: any) => {
      const renderResult = render.call(this, props ?? this.props, state ?? this.state);
      this.renderResultMemento = renderResult;
      return renderResult;
    };
  }
}

export default Component;
