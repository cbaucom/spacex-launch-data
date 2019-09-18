import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async url => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(url);
      const json = await response.json();

      // Add isFavorite to each launch object we get back
      const data = json.map(launch => ({ ...launch, isFavorite: false }));

      setData(data);
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [data, loading, error];
}

export { useFetch };
