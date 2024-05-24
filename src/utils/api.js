import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //* Yapacağımız bütün isteklere eklenileck olan headerlar;
  headers: {
    accept: "application/json",
    //* Yetkilendirme:
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  params: {
    language: "tr-TR",
  },
});
