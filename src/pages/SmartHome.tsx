import React, { useEffect, useState } from 'react';
import HomeDefault from './Home';
import HomeAU from './home-australia';
import HomeUAE from './home-uae';
import HomeUK from './home-UK';
import HomeUSA from './home-usa';

const regionBounds = {
  australia: [-44, -10, 113, 154],
  uae: [22.5, 26.5, 51.5, 56.5],
  uk: [49.8, 60.9, -8.6, 1.8],
  usa: [24.5, 49.4, -125, -66.9],
};

const getCoordinates = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Geolocation not supported');
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};

const determineRegion = (lat: number, lon: number): string => {
  for (const [region, [minLat, maxLat, minLon, maxLon]] of Object.entries(regionBounds)) {
    if (lat >= minLat && lat <= maxLat && lon >= minLon && lon <= maxLon) {
      return region;
    }
  }
  return 'default';
};

const SmartHome: React.FC = () => {
  const [region, setRegion] = useState<string | null>(null);

  useEffect(() => {
    const detectRegion = async () => {
      try {
        const pos = await getCoordinates();
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const matchedRegion = determineRegion(lat, lon);
        setRegion(matchedRegion);
      } catch (err) {
        console.error('Geolocation error:', err);
        setRegion('default');
      }
    };

    detectRegion();
  }, []);

  if (!region) return <div>Loading experience...</div>;

  switch (region) {
    case 'australia':
      return <HomeAU />;
    case 'uae':
      return <HomeUAE />;
    case 'uk':
      return <HomeUK />;
    case 'usa':
      return <HomeUSA />;
    default:
      return <HomeDefault />;
  }
};

export default SmartHome;
