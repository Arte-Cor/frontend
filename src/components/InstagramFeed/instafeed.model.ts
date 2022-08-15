export interface InstaFeedModel {
  data?: {
    caption?: string;
    media_url?: string;
    media_type?: "VIDEO" | "IMAGE";
    thumbnail_url?: string;
    id?: string;
  }[]
};