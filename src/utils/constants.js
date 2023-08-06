const GOOGLE_API_KEY = "";

export const YOUTUBE_VIDEOS_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=24&key=" + GOOGLE_API_KEY;

export const CHANNEL_FTECH_URL = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + "&id=";

export const VIDEO_CATEGORY_URL = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + GOOGLE_API_KEY;