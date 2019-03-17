import React, { useState, useEffect } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';

export default () => {
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    fetch(`http://raspberrypi:3000/api/hex/${color.substring(1)}`)
  }, [color])

  const handleChangeComplete = color => setColor(color.hex);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <SketchPicker
        disableAlpha
        color={color}
        onChangeComplete={handleChangeComplete}
      />
      {/* <SwatchesPicker
        color={color}
        onChangeComplete={handleChangeComplete}
      /> */}
    </div>
  );
};
