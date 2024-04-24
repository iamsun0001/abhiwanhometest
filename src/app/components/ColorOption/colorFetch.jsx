
import { useState, useEffect } from 'react';

const colorFetch = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch('https://random-flat-colors.vercel.app/api/random?count=5');
        if (response.ok) {
          const data = await response.json();
          data.colors;
          setColors(data.colors);
        } else {
          console.error('Failed to fetch colors:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching colors:', error.message);
      }
    };

    fetchColors();
  }, []);
  return colors;
};

export default colorFetch;
