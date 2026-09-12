import { useEffect, useRef, useState } from 'react';

import { applyAuth } from '../auth/access-token.js';

export default function useFetch(fetchFunc, params) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const paramsRef = useRef(params);

  if (params && !shallowEqual(params, paramsRef.current)) {
    paramsRef.current = params;
  }

  params = paramsRef.current;
  const options = {};
  applyAuth(options);

  useEffect(() => {
    fetchFunc(params ?? options, params ? options : undefined)
      .then(handleResponse)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fetchFunc, params]);

  return { data, setData, loading, error };
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

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(key => object1[key] === object2[key]);
}
