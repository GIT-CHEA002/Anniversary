const NAV_ITEMS = [
  ['home', 'Home'],
  ['about', 'About Us'],
  ['story', 'Our Story'],
  ['letter', 'For You'],
];

export default function Nav({ page, setPage }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-10 flex items-center justify-between px-5 sm:px-8 lg:px-14 py-5 bg-brand-white/80 backdrop-blur-md border-b border-brand-line">
      <div className="font-display italic text-xl sm:text-2xl text-brand-deep">
        S &amp; C
      </div>
      <ul className="flex gap-3 sm:gap-6 lg:gap-8 list-none m-0 p-0">
        {NAV_ITEMS.map(([id, label]) => (
          <li key={id}>
            <button
              onClick={() => setPage(id)}
              className={
                'font-body bg-transparent border-none cursor-pointer text-[13px] sm:text-sm py-1.5 px-0.5 border-b transition-colors duration-300 ' +
                (page === id
                  ? 'text-brand-deep border-brand-rose opacity-100'
                  : 'text-brand-ink/65 border-transparent hover:text-brand-deep hover:border-brand-rose hover:opacity-100')
              }
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
