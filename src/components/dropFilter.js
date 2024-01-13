import React, { useState } from 'react';

const ExampleComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Menja vrednost stanja iz true u false i obrnuto
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <p>This is the visible element</p>}
    </div>
  );
};

export default ExampleComponent;