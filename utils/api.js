import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endPoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  const res = await fetch(`${API_URL}${endPoint}`, options);
  const data = await res.json();
  return data;
};


export const makePayment = async (endPoint, payload) => {
  const res = await fetch(`${API_URL}${endPoint}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })
  const data = res.json();
  return data;
} 
