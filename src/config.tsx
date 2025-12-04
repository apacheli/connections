import { image, link, note } from "./cards.tsx";

export default {
	portrait: "/assets/portrait.png",
	favicon: "/assets/favicon.png",
	background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwOkZKjuR8h07APiyo2iUSwE4G9Gnkt_PZA&s",
	title: "Hello, World!",
	name: "apacheli",
	description: (
		<>
			<p>Follow me on all of my social media platforms!</p>
		</>
	),
	cards: [
		note(<p>Hello, World!</p>),
		link("https://github.com/apacheli", "Look at my GitHub projects!"),
		image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74p0-GFNquBzzGLN9SazH22Wrus46aPPqYQ&s"),
		note("This is a note. You can put anything here."),
	],
};
