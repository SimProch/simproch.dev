export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.ico","icons/linkedin-white.ico","icons/stack-overflow.ico","icons/twitter.ico","images/.DS_Store","images/company-logos/green-fox-academy.png","images/company-logos/level-works.png","images/company-logos/logex-solution-centre.png","images/logo.png","robots.txt","simproch.jpeg","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".jpeg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.7sXNs0DE.js","app":"_app/immutable/entry/app.pDcnPUXN.js","imports":["_app/immutable/entry/start.7sXNs0DE.js","_app/immutable/chunks/entry.CdEJCCdd.js","_app/immutable/chunks/scheduler.CC5rdfI7.js","_app/immutable/entry/app.pDcnPUXN.js","_app/immutable/chunks/scheduler.CC5rdfI7.js","_app/immutable/chunks/index.BPwNn6vj.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/green-fox-academy",
				pattern: /^\/green-fox-academy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/level-works",
				pattern: /^\/level-works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logex-solution-centre",
				pattern: /^\/logex-solution-centre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
