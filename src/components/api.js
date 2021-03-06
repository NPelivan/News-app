import { API_KEY } from "../utils/config";

export const getArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=all&sortBy=popularity&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json.articles;
};

export const searchArticles = async (topic) => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json;
};

export const generalArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=general&sortBy=publishedAt&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json;
};

export const businessArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=business&sortBy=publishedAt&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json;
};

export const healthArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=health&sortBy=publishedAt&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json;
};

export const scienceArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=science&sortBy=publishedAt&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json;
};

export const sportsArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json;
};

export const techArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=${API_KEY}`
	);
	const json = await response.json();
	return json;
};
