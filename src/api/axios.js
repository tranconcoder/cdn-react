import axios from "axios";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const instance = axios.create({
	baseURL: process.env.BASE_API_URL,
	timeout: 60000,
});

instance.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(err) => {
		throw err;
	}
);

export default instance;
