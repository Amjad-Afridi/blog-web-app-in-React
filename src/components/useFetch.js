import { useEffect, useState } from "react";
function useFetch(url) {
  const [blogs, setBlogs] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("no such endpoint exists!");
          }
          return response.json();
        })
        .then((responseData) => {
          setBlogs(responseData);
          setIsLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);
  return { blogs, isloading, error };
}

export default useFetch;
