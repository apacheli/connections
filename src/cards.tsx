const link = (url: string, text?: string) => {
	const { host, origin } = new URL(url);
	return (
		<a class={`link link-${host}`} href={url} title={text}>
			<img src={`${origin}/favicon.ico`} alt={text} />
			<span>{text}</span>
		</a>
	);
};

const image = (url: string, text?: string) => {
	return (
		<figure class="image">
			<img src={url} alt={text} />
			<figcaption>{text}</figcaption>
		</figure>
	);
};

const note = (element: any) => {
	return <div class="note">{element}</div>;
};

export { link, image, note };
