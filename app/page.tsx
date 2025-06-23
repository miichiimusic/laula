'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingEntryPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload /home while animation is running
    router.prefetch('/home');

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          router.push('/home');
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div style={styles.overlay}>
      <div style={styles.text}>laula.ai — {progress}%</div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center' as const,
  },
};