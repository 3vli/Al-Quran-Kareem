import axios from "axios";

export const baseAPI = axios.create({
	baseURL: "http://api.alquran.cloud/v1",
});
