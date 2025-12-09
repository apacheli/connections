import config from "../config.tsx";

export const metadata = {
	id: "index",
};

export default () => (
	<html lang="en">
		<head>
			<title>{config.name}</title>
			<link rel="stylesheet" href="/assets/index.css" />
			<meta name="theme-color" content={config.themeColor} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
		</head>
		<body style={`--b:url(${config.background});--t:${config.themeColor}`}>
			<main class="main">
				<header class="header">
					<img src={config.portrait} alt={config.name} class="portrait" />
					<h1>{config.name}</h1>
					<div>{config.description}</div>
				</header>
				<div class="cards">{config.cards}</div>
			</main>
		</body>
	</html>
);
