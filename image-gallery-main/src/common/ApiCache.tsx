import { ApiCacheKey, UnsplashImage } from "./types";

class ApiCache {
  searchCache = new Map<ApiCacheKey, UnsplashImage[]>();
  homePageCache: UnsplashImage[] = [];

  addEntry(key: ApiCacheKey, data: UnsplashImage[]) {
    if (this.searchCache.has(key)) return;
    this.searchCache.set(key, data);
  }

  retrieveEntry(key: ApiCacheKey) {
    return this.searchCache.get(key);
  }

  setHomePageCache(newValue: UnsplashImage[]) {
    this.homePageCache = newValue;
  }
}

export default ApiCache;
