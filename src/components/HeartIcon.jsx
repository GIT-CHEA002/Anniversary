import { HEART_PATH } from '../icons.js';

export default function HeartIcon({ className, size = 16 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ fill: 'currentColor' }}
    >
      <path d={HEART_PATH} />
    </svg>
  );
}
