import axios from "axios";

export const client = axios.create({
  baseURL: `https://newsapi.org/v2`,
});

export interface GeneralResponseAPI {
  status: string;
  sources: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  }[];
}

export interface CategoryResponseAPI {
  status: string;
  totalResults: number;
  articles: {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    category?: string;
  }[];
}
