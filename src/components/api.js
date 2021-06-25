import { API_KEY } from "../utils/config";

export const getArticles = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=${API_KEY}`
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
