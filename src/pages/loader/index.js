import React, { useState, useEffect } from 'react';
import Loader from '../../components/loader';
import Home from '../home';

function Load() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading your app content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
      {loading ? (
        <Loader />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Load;
