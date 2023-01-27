import axios from "axios";

export const client = axios.create({
  baseURL: `https://newsapi.org/v2`,
});

export interface ResponseAPI {
  status: string;
  sources: {}[];
  totalResults: number;
  articles: {}[];
}
