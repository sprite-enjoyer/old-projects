import Observer from "./Observer";

class Observable<T extends Object> {
  proxy: T;
  watchers: Observer<any, any>[] = [];

  constructor(sourceObj: T) {
    const thisObservable = this;
    const proxyHandler: ProxyHandler<T> = {
      set(target, property, newValue, receiver) {
        const result = Reflect.set(target, property, newValue, receiver);
        // console.table([
        //   ["target", "property", "newValue", "receiver"],
        //   [target, property, newValue, receiver],
        // ]);
        thisObservable.notifyWatchers(target);
        return result;
      },

      get(target, property, receiver) {
        return Reflect.get(target, property, receiver);
      },
    };

    this.proxy = new Proxy(sourceObj, proxyHandler);
  }

  notifyWatchers(target: T) {
    for (let i = 0; i < this.watchers.length; i++) {
      this.watchers[i].notify(target);
    }
  }

  addWatcher(watcher: Observer<any, any>) {
    this.watchers.push(watcher);
  }
}

export default Observable;
