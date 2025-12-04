import config from "../config.tsx";

export const metadata = {
	id: "index",
};

export default () => (
	<html>
		<head lang="en">
			<title>{config.name}</title>
			<link rel="stylesheet" href="/assets/index.css" />
			<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
		</head>
		<body style={`--bg: url(${config.background})`}>
			<main class="main">
				<header>
					<h1>{config.name}</h1>
					<div>{config.description}</div>
				</header>
				<div class="cards">{config.cards}</div>
			</main>
		</body>
	</html>
);
