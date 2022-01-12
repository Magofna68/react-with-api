import {useEffect, useState} from 'react';

const useApi = () => {
  const [isLoaded, setLoading] = useState(false)
  const [data, setData] = useState(null)
//   const [error, setError] = useState(null)

  const fetchApi = () => {
    fetch(`https:/api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)

    .then(response=> {
      return response.json()
    })

    .then(jsonifiedResponse => {
      this.setState({
          isLoaded: true,
          setData: jsonifiedResponse.results
      })
    })

    .catch((error) => {
      this.setState({
          isLoaded: true,
          error
      });
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
}

export default useApi;