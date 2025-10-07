import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

const Draw = () => {
  const canvasRef = useRef(null);

  const handleClear = () => {
    canvasRef.current.clear();
  };

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  return (
    <div>
      <h2>Draw</h2>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleUndo}>Undo</button>
      <CanvasDraw
        ref={canvasRef}
        brushRadius={2}
        lazyRadius={0}
        canvasWidth={800}
        canvasHeight={600}
      />
    </div>
  );
};

export default Draw;
