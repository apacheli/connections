import icons from "./icons.tsx";

const colors: Record<keyof typeof icons, string> = {
	"ArtStation": "#13aff0",
	"Bilibili": "#fb7299",
	"Bluesky": "#228dff",
	"DeviantArt": "#00e59b",
	"Discord": "#5865f2",
	"Facebook": "#1877f2",
	"Instagram": "#e4405f",
	"LinkedIn": "#0077b5",
	"Mastodon": "#6364ff",
	"Patreon": "#f96854",
	"Pinterest": "#e60023",
	"Pixiv": "#0096fa",
	"SoundCloud": "#ff5500",
	"Steam": "#00adee",
	"Telegram": "#0088cc",
	"Threads": "#000000",
	"TikTok": "#fe2c55",
	"Tumblr": "#35465c",
	"Twitch": "#6441a4",
	"Twitter": "#1da1f2",
	"Vimeo": "#1ab7ea",
	"VK": "#4c75a3",
	"WhatsApp": "#25d366",
	"YouTube": "#ff0000",
};

const link = (url: string, text?: string, id?: keyof typeof icons) => {
	const Icon = id ? icons[id] : undefined;
	return (
		<a class="link" href={url} title={text} style={id !== undefined ? `--c:${colors[id]}` : undefined}>
			{Icon?.()}
			<p>{text}</p>
		</a>
	);
};

const image = (url: string, text?: string) => {
	return (
		<figure class="image">
			<div class="image-container">
				<img src={url} alt={text} />
			</div>
			<figcaption>{text}</figcaption>
		</figure>
	);
};

const note = (element: any) => {
	return <div class="note">{typeof element === "string" ? <p>{element}</p> : element}</div>;
};

export { colors, link, image, note };
