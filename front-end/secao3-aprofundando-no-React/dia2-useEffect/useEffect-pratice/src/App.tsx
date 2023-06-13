import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';
import './App.css'


type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return <h1>Searching for ISS, please wait...</h1>;
  }

  return (
    <>
    <h1>International Space Station</h1> 
    <h1>Location Tracker</h1>
    {coordinates && (
      <>
        <h2>{`Latitude: ${coordinates.latitude}`}</h2>
        <h2>{`Longitude: ${coordinates.longitude}`}</h2>
      </>
    )}
  </>
  );
}

export default App;

