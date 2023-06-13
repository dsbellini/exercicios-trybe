// /src/services.ts

export const fetchCoordinates = async () => {
    const response = await fetch(
      'https://api.wheretheiss.at/v1/satellites/25544'
    );
  
    if (!response.ok) {
      throw new Error(`Failed to fetch coordinates`);
    }
  
    const coordinates = await response.json();
  
    const latitude = Number(coordinates.latitude.toFixed(4));
    const longitude = Number(coordinates.longitude.toFixed(4));
    //Nesse caso, foi utilizado .toFixed(4), pois você vai renderizar apenas o valor com quatro números depois da vírgula e utilizar Number() para garantir que o valor armazenado será do tipo number.
  
    return { latitude, longitude };
  };
  