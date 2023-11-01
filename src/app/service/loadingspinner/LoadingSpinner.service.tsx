import React, { useState, useEffect } from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <img
      src="/media/logos/rheemPreloader@2x.gif"
      alt="Loading..."
      className="spinner-image dark-logo"
    />
  </div>
);

const LoadingSpinnerService: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate an API request
    setLoading(true);

    // Replace this with your actual API request logic
    setTimeout(() => {
      setLoading(false); // Set loading to false when data is fetched
    }, 5000);
  }, []);

  return (
    <div className="loading-spinner-container">
      {loading && <LoadingSpinner />}
      {!loading && <p>Data has been fetched.</p>}
    </div>
  );
};

export default LoadingSpinnerService;
