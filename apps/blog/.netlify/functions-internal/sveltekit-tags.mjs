import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.ico","images/.DS_Store","images/angry-simon.gif","images/data-structures-and-algorithms/bst-balanced.png","images/data-structures-and-algorithms/bst-complete.png","images/data-structures-and-algorithms/bst-morse-1.svg","images/data-structures-and-algorithms/bst-morse.jpeg","images/data-structures-and-algorithms/bst-predecessor-successor.jpg","images/data-structures-and-algorithms/bst-traversal.jpg","images/data-structures-and-algorithms/complexity_chart.jpeg","images/data-structures-and-algorithms/graph-directed.png","images/data-structures-and-algorithms/graph-undirected.png","images/data-structures-and-algorithms/graph-weighted-path.png","images/data-structures-and-algorithms/graph-weighted.png","images/data-structures-and-algorithms/max-heap.jpeg","images/data-structures-and-algorithms/min-heap.jpeg","images/data-structures-and-algorithms/trie_example.png","images/empty.png","images/hand-bone.jpeg","images/hand-flesh.jpeg","images/icons/.DS_Store","images/icons/github-white.svg","images/icons/icon-close.svg","images/icons/icon-external-window.svg","images/icons/icon-menu.svg","images/icons/linkedin-white.ico","images/icons/stack-overflow.ico","images/icons/twitter.ico","images/logo.png","images/system-design/.DS_Store","images/system-design/chat-service.webp","images/system-design/complex-system-design.webp","images/system-design/deep-dive-post-publishing.webp","images/system-design/detailed-rate-limiter-design.webp","images/system-design/direct-message-flow.webp","images/system-design/google-drive-compression.png","images/system-design/google-drive-high-level-final.png","images/system-design/google-drive-high-level-v2.png","images/system-design/google-drive-high-level.png","images/system-design/hashing-ring.png","images/system-design/key-value-store-diagram.png","images/system-design/master-slave-db.webp","images/system-design/multiple-devices-sync.webp","images/system-design/news-feed-retrieval.webp","images/system-design/news-feed-service.webp","images/system-design/node-ring-distribution.png","images/system-design/post-publishing.webp","images/system-design/prioritizer-and-politeness.webp","images/system-design/receiver-messages.webp","images/system-design/saved-trie.png","images/system-design/sender-messages.webp","images/system-design/single-server-setup.png","images/system-design/sstable-diagram.webp","images/system-design/system-design-web-crawler.webp","images/system-design/url-frontier.png","images/system-design/web-crawler-architecture.png","images/system-design/youtube-dag-architecture.svg","images/system-design/youtube-dag-encoding.svg","images/system-design/youtube-dag-resource-manager.svg","images/system-design/youtube-dag-scheduler.svg","images/system-design/youtube-flow.webp","images/system-design/youtube-transcoding-flow-message-queue.svg","images/system-design/youtube-transcoding-flow.svg","images/system-design/youtube-update-metadata.webp","images/system-design/youtube-upload-video.webp","images/system-design/youtube-video-partially-loaded.png","images/system-design/youtube-watch-video.webp","robots.txt","simproch.jpeg"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dj20VG6I.js","app":"_app/immutable/entry/app.DiSzlnhE.js","imports":["_app/immutable/entry/start.Dj20VG6I.js","_app/immutable/chunks/entry.OYgPGq9S.js","_app/immutable/chunks/scheduler.j8Q4ZHqI.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.DiSzlnhE.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.j8Q4ZHqI.js","_app/immutable/chunks/index.igpyLPj4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/7.js'))
		],
		routes: [
			{
				id: "/tags",
				pattern: /^\/tags\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[category]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
