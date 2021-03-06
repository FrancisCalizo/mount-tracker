import React from 'react';

/**
 * Threshold from which mouse movement with pressed mouse button
 * is considered a drag instead of a click.
 */
const MoveDragThreshold = 10;

export default function useDragDetection(): {
  handleMouseDown: () => void;
  dragging: boolean;
} {
  const [mouseDown, setMouseDown] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);

  React.useEffect(() => {
    let mouseMove = 0;

    function handleMouseUp(): void {
      setMouseDown(false);
    }

    function handleMouseMove(e: MouseEvent): void {
      mouseMove += Math.abs(e.movementX) + Math.abs(e.movementY);
      setDragging(mouseMove > MoveDragThreshold);
    }

    if (mouseDown) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown]);

  function handleMouseDown(): void {
    setMouseDown(true);
    setDragging(false);
  }

  return {
    handleMouseDown,
    dragging,
  };
}
