import { useEffect, useState } from 'react';

export default function useFetch(fetchFunc, params) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchFunc(params).then(handleResponse).then(setData).catch(console.error);
  }, [fetchFunc, params]);

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
