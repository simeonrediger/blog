import { useEffect, useState } from 'react';

export default function useFetch(fetchFunc, pathParam) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchFunc(pathParam)
      .then(handleResponse)
      .then(setData)
      .catch(console.error);
  }, [fetchFunc, pathParam]);

  return data;
}

function handleResponse(res) {
  if (!res.ok) {
    let error = `HTTP ${res.status}`;

    if (res.statusText) {
      error += `: ${res.statusText}`;
    }

    throw new Error(error);
  }

  return res.json();
}
