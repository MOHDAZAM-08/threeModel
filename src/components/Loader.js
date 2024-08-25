import React from 'react';
import { useProgress, Html } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white' }}>Loading {progress.toFixed(0)} %</div>
    </Html>
  );
}

export default Loader;
