const STORY_ITEMS = [
  [
    'where it started',
    'The Beginning',
    "Before I really knew you, I already had a feeling you'd matter. I just didn't know how much yet.",
  ],
  [
    'getting closer',
    'Getting to Know You',
    'Every conversation felt like finding another reason to like you a little more than I already did.',
  ],
  [
    'choosing each other',
    'Falling In',
    'Somewhere between the easy days and the hard ones, this stopped feeling new and started feeling like home.',
  ],
  [
    'july 21st',
    'Today, and Always',
    'Here we are — still choosing each other. Happy anniversary 2 Months , My Chenda.',
  ],
];

export default function Story() {
  return (
    <section id="story" className="min-h-screen animate-pagein">
      <div className="max-w-[680px] mx-auto px-5 sm:px-8 pt-[150px] pb-[110px]">
        <div className="text-center mb-14">
          <h1 className="font-display italic font-medium text-brand-deep text-[clamp(34px,6vw,48px)] m-0 mb-2.5">
            Our Story
          </h1>
          <div className="w-11 h-px bg-brand-rose/60 mx-auto" />
        </div>

        <div className="relative pl-7">
          <div className="absolute left-[6px] top-1.5 bottom-1.5 w-px bg-brand-line" />
          {STORY_ITEMS.map(([date, title, text], i) => (
            <div
              key={i}
              className={
                'relative ' +
                (i === STORY_ITEMS.length - 1 ? 'pb-0' : 'pb-11')
              }
            >
              <span className="absolute -left-7 top-[5px] w-[9px] h-[9px] rounded-full bg-brand-rose shadow-[0_0_0_4px_#FFF1F5]" />
              <span className="text-[12.5px] text-brand-rose mb-1 block">
                {date}
              </span>
              <h3 className="font-display font-semibold italic text-brand-deep text-[22px] m-0 mb-2">
                {title}
              </h3>
              <p className="m-0 text-[15.5px] text-brand-ink/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
