import React from 'react';

const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      {children}
    </div>
  );
};

export default GridContainer;