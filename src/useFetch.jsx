import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (updatedUrl) => {
    try {
      setIsLoading(true);

      const response = await fetch(updatedUrl);

      if (!response.ok) {
        throw new Error(`Ошибка сети или сервера: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = ({ params = {} }) => {
    let queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");

    const updatedUrl = queryString ? `${url}?${queryString}` : url;

    fetchData(updatedUrl);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading, error, refetch };
};
