import React from 'react';
import useToggle from './useToggle';

function UseToggleDemo() {
  const [value, { toggle, set }] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <div>
      <button style={{padding: '20px', width: '150px'}} 
        onClick={() => toggle()}>
        {value}
      </button>
      <button style={{padding: '20px'}} onClick={() => set('red')}>
        Set to red
      </button>
    </div>
  );
}

export default UseToggleDemo;