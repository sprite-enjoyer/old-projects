class Observer<T, S> {
  observer: T;
  cb: (...args: any[]) => any;

  constructor(obj: T, cb: (source: S) => any) {
    this.observer = obj;
    this.cb = cb;
  }

  notify(source: S) {
    this.cb(source);
  }
}

export default Observer;
