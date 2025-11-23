export interface Play {
  id: string;
  title: string;
  year: string;
  role: string;
  details?: string;
  director: string;
  videoPlaceholderId: number; // To generate unique mock thumbnails
  videoSrc?: string;
  thumbnailSrc?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  videoPlaceholderId: number;
  videoSrc?: string;
  thumbnailSrc?: string;
  objectPosition?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}