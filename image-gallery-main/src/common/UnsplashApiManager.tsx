import ApiCache from "./ApiCache";

class UnsplashApiManager {
  accessKey = "";
  secretKey = "";
  appID = "";
  apiBaseUrl = "https://api.unsplash.com";
  apiCache = new ApiCache();

  constructor() {
    const { VITE_UNSPLASH_ACCESS_KEY, VITE_UNSPLASH_SECRET_KEY, VITE_UNSPLASH_APP_ID } = import.meta.env;
    if (!VITE_UNSPLASH_ACCESS_KEY || !VITE_UNSPLASH_SECRET_KEY || !VITE_UNSPLASH_APP_ID)
      throw new Error("env variables not defined properly in UnsplashApiManager!");
    this.accessKey = VITE_UNSPLASH_ACCESS_KEY;
    this.secretKey = VITE_UNSPLASH_SECRET_KEY;
    this.appID = VITE_UNSPLASH_APP_ID;
  }

  fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response> {
    const headers = { ...init?.headers, Authorization: `Client-ID ${this.accessKey}` };
    return window.fetch(input, { headers: headers });
  }

  async getHomePagePhotos(page: number) {
    if (this.apiCache.homePageCache.length > 0) return this.apiCache.homePageCache;
    const result = await this.fetch(`${this.apiBaseUrl}/photos?page=${page}&per_page=20&order_by=popular`)
      .then(async (res) => await res.json())
      .catch((err) => console.error(err));

    this.apiCache.setHomePageCache(result);

    return result;
  }

  async getSearchedPhotos(query: string, page: number) {
    const key = { searchString: query, page };
    const cached = this.apiCache.retrieveEntry(key);
    if (cached) return cached;
    const result = await this.fetch(`${this.apiBaseUrl}/search/photos?query=${query}&page=${page}&per_page=20`)
      .then(async (res) => await res.json())
      .catch((err) => console.error(err));

    this.apiCache.addEntry(key, result);

    return result;
  }

  async makeDummyRequest() {
    const result = await fetch("../../data.json")
      .then(async (res) => await res.json())
      .catch((err) => console.error(err));

    return result;
  }
}

export default UnsplashApiManager;
