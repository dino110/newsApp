import { client, ResponseAPI } from "../api/api";
const newsApiKey = "dd468e24f9e047a4b73f010ac674cfca";

export const getGeneralNews = async (): Promise<ResponseAPI[]> => {
  let queryString = `/top-headlines/sources?apiKey=${newsApiKey}`;
  const { data } = await client.get<ResponseAPI[]>(queryString);
  return data;
};

export const getCategoryNews = async (
  category: string
): Promise<ResponseAPI[]> => {
  let queryString = `/top-headlines?category=${category}&pageSize=100&country=us&apiKey=${newsApiKey}`;
  const { data } = await client.get<ResponseAPI[]>(queryString);
  return data;
};
