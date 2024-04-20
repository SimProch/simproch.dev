import type { Post } from '../types';
import systemDesignIntro from './1-system-design-intro.json';
import systemDesignTools from './2-system-design-tools.json';
import systemDesignEstimations from './3-system-design-estimations.json';
import systemDesignRateLimiter from './4-system-design-rate-limiter.json';
import systemDesignConsistentHashing from './5-system-design-consistent-hashing.json';
import systemDesignKeyValueStore from './6-system-design-key-value-store.json';
import systemDesignIDGenerator from './7-system-design-unique-id-generator.json';
import systemDesignURLShortener from './8-system-design-url-shortener.json';
import systemDesignNotificationSystem from './9-system-design-notification-system.json';
import systemDesignChatService from './10-system-design-chat-service.json';
import systemDesignNewsFeed from './11-system-design-news-feed.json';
import systemDesignWebCrawler from './12-system-design-web-crawler.json';
import systemDesignAutocomplete from './13-system-design-autocomplete.json';
import systemDesignYoutube from './14-system-design-youtube.json';
import systemDesignGoogleDrive from './15-system-design-google-drive.json';
import systemDesignFinalWords from './16-system-design-afterword.json';

const posts = [
	systemDesignIntro,
	systemDesignTools,
	systemDesignEstimations,
	systemDesignRateLimiter,
	systemDesignConsistentHashing,
	systemDesignKeyValueStore,
	systemDesignIDGenerator,
	systemDesignURLShortener,
	systemDesignNotificationSystem,
	systemDesignChatService,
	systemDesignNewsFeed,
	systemDesignWebCrawler,
	systemDesignAutocomplete,
	systemDesignYoutube,
	systemDesignGoogleDrive,
	systemDesignFinalWords
] as unknown[] as Post[];
export { posts };
