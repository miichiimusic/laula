'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Remove the inline HTML fallback loader as soon as React is ready
    const preloader = document.getElementById('instant-loader');
    if (preloader) preloader.remove();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 300); // optional fade buffer
          return 100;
        }
        return prev + 2;
      });
    }, 40); // ~2 seconds total

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.text}>laula.ai — {progress}%</div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '1.5rem',
  },
  text: {
    textAlign: 'center' as const,
  },
};