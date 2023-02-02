import { useState, useEffect } from "react";

export const useAsync = (asyncFunc, dependecies = []) => {
  
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  if(!Array.isArray(dependecies)) {
    console.error('No hay dependecias')
    dependecies = []
  }
  useEffect(() => {
    setLoading(true);

    asyncFunc()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dependecies]);
  return {
    data,
    error,
    loading,
  };
}



