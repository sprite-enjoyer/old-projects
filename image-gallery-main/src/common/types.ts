export interface UnsplashImage {
  urls: {
    thumb: string;
    raw: string;
    full: string;
  };
  alt_description: string;
  id: string;
  user: {
    username: string;
  };
}

export interface ApiCacheKey {
  searchString: string;
  page: number;
}

export interface UnsplashImageAdditionalInfo {}
