import { action, makeObservable, observable, toJS } from "mobx";
import { UnsplashImage } from "./types";
import UnsplashApiManager from "./UnsplashApiManager";

class GalleryStore {
  searchResult: UnsplashImage[] = [];
  mainPageImages: UnsplashImage[] = [];
  history = new Set<string>();
  private unsplashApiManager = new UnsplashApiManager();
  currentQuery = "";
  page = 1;

  constructor() {
    makeObservable(this, {
      searchResult: observable,
      mainPageImages: observable,
      page: observable,
      currentQuery: observable,
      setMainPageImages: action,
      setSearchResult: action,
      setCurrentQuery: action,
      setPage: action,
    });
  }

  setCurrentQuery(newValue: string) {
    this.currentQuery = newValue;
  }

  setPage(newValue: number) {
    this.page = newValue;
  }

  setSearchResult(newValue: UnsplashImage[]) {
    this.searchResult = newValue;
  }

  setMainPageImages(newValue: UnsplashImage[]) {
    this.mainPageImages = newValue;
  }

  async makeDummyRequest() {
    await this.unsplashApiManager.makeDummyRequest().then(async (res) => this.setMainPageImages(await res));
  }

  async makeSearchRequest(query: string, page: number) {
    this.addHistoryEntry(query);
    await this.unsplashApiManager.getSearchedPhotos(query, page).then(async (res) => this.setSearchResult(await res));
  }

  async makeHomePagePhotosRequest(page: number) {
    await this.unsplashApiManager.getHomePagePhotos(page).then(async (res) => this.setMainPageImages(await res));
  }

  addHistoryEntry(newValue: string) {
    this.history.add(newValue);
  }
}

export default GalleryStore;
