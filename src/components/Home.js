import React from 'react';
import summerImage from '../summer.jpg';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <img src={summerImage} alt="Summer" style={{ width: '100%' }} />
    </div>
  );
};

export default Home;
