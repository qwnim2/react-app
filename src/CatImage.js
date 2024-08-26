import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CatImage() {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCatImage = () => {
    setLoading(true);
    axios
      .get('http://localhost:8000/api/cat-image/')
      .then((response) => {
        setCatImageUrl(response.data.url);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching cat image');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div>
      <h1>Random Cat Image Generator</h1>
      {loading ? (
        <p>Loading cat image...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <img src={catImageUrl} alt="A random cat" style={{ width: '500px', height: '500px' }} />
          <br />
          <button onClick={fetchCatImage}>Get Another Cat</button>
        </div>
      )}
    </div>
  );
}

export default CatImage;
