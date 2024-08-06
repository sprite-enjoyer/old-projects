import { action, makeObservable, observable } from "mobx";

export class HeaderStore {
  selectedSectionNumber: number = 1;

  constructor() {
    makeObservable(this, {
      selectedSectionNumber: observable,
      changeSelectedSection: action,
    });
  };
  changeSelectedSection = (newValue: number) => this.selectedSectionNumber = newValue;
};

const headerStore = new HeaderStore();
export default headerStore;