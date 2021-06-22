import { API_KEY } from "../utils/config";

export const getArticles = async (topic) => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=${API_KEY}`
	);
	const json = await response.json();
	console.log(json);
	return json.articles;
};
