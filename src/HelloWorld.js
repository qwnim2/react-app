import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  const fetchTime = () => {
    axios.get('http://localhost:8000/api/hello-world/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchTime();
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>{message}</p>
      <br />
          <button onClick={fetchTime}>Get Current Time</button>
    </div>
  );
}

export default HelloWorld;