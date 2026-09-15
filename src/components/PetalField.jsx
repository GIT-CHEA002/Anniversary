import { useEffect, useRef } from 'react';
import { HEART_PATH } from '../icons.js';

export default function PetalField() {
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    let stopped = false;

    function spawn() {
      if (stopped || !field) return;
      const p = document.createElement('div');
      p.className = 'absolute top-[-5%] opacity-55 animate-fall';
      p.innerHTML = `<svg viewBox="0 0 24 24" class="w-full h-full fill-brand-pink"><path d="${HEART_PATH}"/></svg>`;
      const left = Math.random() * 100;
      const duration = 9 + Math.random() * 7;
      const drift = (Math.random() * 60 - 30) + 'px';
      const size = 10 + Math.random() * 10;
      p.style.left = left + 'vw';
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.setProperty('--drift', drift);
      p.style.animationDuration = duration + 's';
      field.appendChild(p);
      setTimeout(() => p.remove(), duration * 1000 + 200);
    }

    const bursts = [0, 1400, 2800].map((t) => setTimeout(spawn, t));
    const interval = setInterval(spawn, 3200);
    return () => {
      stopped = true;
      bursts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="petal-field"
      ref={fieldRef}
      className="fixed inset-0 pointer-events-none z-[2] overflow-hidden"
    ></div>
  );
}
