import { useState, useEffect, useMemo } from "react";

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

  const refetch = useMemo(
    ({ params = {} }) => {
      let queryString = Object.keys(params)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join("&");

      const updatedUrl = queryString ? `${url}?${queryString}` : url;

      fetchData(updatedUrl);
    },
    [url]
  );

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading, error, refetch };
};

/*
import {useState, useEffect} from 'react';
import axios from 'axios';

export function useFetch(url, options = {}) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  function getFetch(opt = options) {
    setLoading(true);

    axios({
      method: 'GET',
      url,
      ...opt,
    })
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getFetch(options);
  }, []);

  return {
    data,
    isLoading,
    error,
    refetch: getFetch
  }
}
*/
