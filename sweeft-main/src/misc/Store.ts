import { observable } from "mobx";
import { action } from "mobx";
import { makeObservable } from "mobx";
import { BreadCrumbData } from "../App";
import { CoreUserData } from "./apiTypeDefs";

class Store {

  userList: CoreUserData[] = [];

  breadCrumbs: BreadCrumbData[] = [];

  fromLink: boolean = false;

  constructor() {
    makeObservable(this, {
      userList: observable,
      breadCrumbs: observable,
      fromLink: observable,
      setBreadCrumbs: action,
      setUserList: action
    });
  }

  setBreadCrumbs(newVal: BreadCrumbData[]) {
    this.breadCrumbs = newVal;
  }

  setUserList(newVal: CoreUserData[]) {
    this.userList = newVal;
  }

  setFromLink(newVal: boolean) {
    this.fromLink = newVal;
  }

}


export default Store;