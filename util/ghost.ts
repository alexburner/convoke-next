import { PostOrPage, Setting } from "@tryghost/content-api";
import axios from "axios";

export const getPosts = async (tags?: string[]) => {
  const filtering = tags ? "&filter=tag:" + tags.join("+") : "";
  const response = await axios.get(getUrl("posts") + filtering);
  if (response && response.data && response.data.posts) {
    return response.data.posts as PostOrPage[];
  }
  return [];
};

export const getSettings = async () => {
  const response = await axios.get(getUrl("settings"));
  if (response && response.data && response.data.settings) {
    return response.data.posts as Setting;
  }
};

// TODO set url & key based on dev/prod
const BASE_URL = "http://localhost:2368/ghost/api/v3/content";
const PUBLIC_KEY = "07bb0c7f0f6a1ac1c42d68c2dc";
const getUrl = (path: string) => `${BASE_URL}/${path}/?key=${PUBLIC_KEY}`;
