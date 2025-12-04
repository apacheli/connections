import type { BluejayConfiguration } from "bluejay";

export default {
	root: import.meta.dir,
	dist: "dist",
	assets: {
		assets: "/assets",
		static: "",
	},
	pages: {
		pages: "",
	},
	components: {},
	serve: {
		prefix: "",
		port: 6767,
		notFound: "index",
		aliases: {
			"": "index",
		},
		redirects: {},
		headers: {
			"Cache-Control": "no-cache",
		},
	},
	onLoad: (app) => {
		return {};
	},
	render: (ctx) => {
		return <ctx.page.element {...ctx} />;
	},
} satisfies BluejayConfiguration;
