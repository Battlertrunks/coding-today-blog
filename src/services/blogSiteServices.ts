import axios from "axios";
import BlogCard from "../models/Article";
import Article from "../models/Article";

const url: string = process.env.REACT_APP_API_URL || "";

export const getBlogCards = (): Promise<Article[]> => {
  return axios.get(`${url}/articles`).then((response) => response.data);
};
