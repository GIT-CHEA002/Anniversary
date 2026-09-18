export default function About() {
  return (
    <section id="about" className="min-h-screen animate-pagein">
      <div className="max-w-[680px] mx-auto px-5 sm:px-8 pt-[150px] pb-[110px]">
        <div className="text-center mb-14">
          <h1 className="font-display italic font-medium text-brand-deep text-[clamp(34px,6vw,48px)] m-0 mb-2.5">
            About Us
          </h1>
          <div className="w-11 h-px bg-brand-rose/60 mx-auto" />
        </div>

        <p className="text-[17px] text-brand-ink mb-[22px]">
          There isn't a simple way to explain what we are, so here's an
          attempt: two people who kept choosing each other, even on the
          ordinary days that no one else remembers but us.
        </p>
        <p className="text-[17px] text-brand-ink mb-[22px]">
          You have a way of making the smallest moments feel worth keeping —
          a quiet drive, a bad joke, an evening with nothing planned.
          Somewhere along the way, those moments became my favorite part of
          any day.
        </p>
        <p className="text-[17px] text-brand-ink mb-[22px]">
          I'm not always good at saying this out loud, so I built you a
          website instead. Consider it my roundabout way of saying: I'm glad
          it's you.
        </p>
        <p className="font-display italic text-brand-deep text-[19px] mt-9">
          — with love, always from Sokchea
        </p>
      </div>
    </section>
  );
}
