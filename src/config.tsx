import { colors, image, link, note } from "./cards.tsx";

const test = [];
for (const c in colors) {
	test.push(link("https://google.com", "Follow me on " + c + "!", c as keyof typeof colors));
}

export default {
	portrait:
		"https://www.armyrecognition.com/templates/yootheme/cache/8d/US_To_Double_B2_Stealth_Bomber_Fleet_With_28_New_Aircraft_After_Iran_Strikes_925_001-8d34cc81.jpeg",
	favicon: "/assets/favicon.png",
	background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Q12VzuNm_xEKGoL7ChO8DoaFabNpo9yAyw&s",
	title: "Hello, World!",
	name: "apacheli",
	themeColor: "#ff0000",
	description: (
		<>
			<p>Follow me on all of my social media platforms!</p>
		</>
	),
	cards: [
		note(<p>Hello, World!</p>),
		note(
			<>
				<p>
					You can write <strong>whatever you want</strong> here. I like boba iced tea.
				</p>
				<p>This is another paragraph.</p>
			</>,
		),
		...test,
		image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74p0-GFNquBzzGLN9SazH22Wrus46aPPqYQ&s", "This is my cat. His name is Thomas."),
		note("This is a note. You can put anything here."),
	],
};
