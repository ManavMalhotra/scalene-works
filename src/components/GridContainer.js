import React from 'react';

const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 mx-16">
      {children}
    </div>
  );
};

export default GridContainer;