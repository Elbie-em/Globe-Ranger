import React from 'react';

function LoadingSpinner() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-grow text-success" style={{ width: 200, height: 200 }} role="status" />
      </div>
      <div className="w-100 text-center">
        <h3 className="text-white brand-font">Loading...</h3>
      </div>
    </>
  );
}

export default LoadingSpinner;
