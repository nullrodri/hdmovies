import axios from "axios";
import {
  DISCOVER_API_URL,
  SEARCH_API_URL,
  API_CONFIG_URL,
} from "@constants/api";

export interface DiscoverResponse {
  page: number;
  results: MovieDetails[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const headersList = {
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
};

const reqOptions = {
  headers: headersList,
};

export const fetchMovies = async (query: string | null) => {
  const response = await axios.get<DiscoverResponse>(
    query ? `${SEARCH_API_URL}?query=${query}` : DISCOVER_API_URL,
    reqOptions
  );
  return response.data;
};

export const getApiConfig = async () => {
  const response = await axios.get(API_CONFIG_URL, reqOptions);
  return response.data;
};
