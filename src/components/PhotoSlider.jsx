import { useState } from 'react';
import { PHOTOS } from '../data/photos.js';

export default function PhotoSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % PHOTOS.length);

  return (
    <div className="text-center mt-16">
      <div className="inline-block bg-white p-3.5 pb-[46px] rounded-md shadow-[0_26px_50px_-24px_rgba(138,51,85,0.4)] [transform:rotate(-2deg)] hover:[transform:rotate(0deg)] transition-transform duration-300 relative">
        <div
          className="relative w-[280px] max-w-[60vw] aspect-[4/5] overflow-hidden rounded-[2px] border border-brand-line cursor-pointer group"
          onClick={next}
          title="Click for next photo"
        >
          {PHOTOS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Photo of Chenda ${i + 1}`}
              className={
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ' +
                (i === index ? 'opacity-100' : 'opacity-0')
              }
            />
          ))}
          <div className="absolute bottom-2 right-2 bg-brand-ink/55 text-white text-[10.5px] py-1 px-2.5 rounded-full tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            click for next photo
          </div>
        </div>
      </div>
      <div className="font-display italic text-brand-deep text-base mt-3.5">
        My Chenda ♡
      </div>
      <div className="flex gap-1.5 justify-center mt-3">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            className={
              'w-1.5 h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ' +
              (i === index ? 'bg-brand-rose scale-[1.3]' : 'bg-brand-line')
            }
          ></button>
        ))}
      </div>
    </div>
  );
}
