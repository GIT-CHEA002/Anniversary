import HeartIcon from '../components/HeartIcon.jsx';
import PhotoSlider from '../components/PhotoSlider.jsx';

export default function LetterPage() {
  return (
    <section
      id="letter"
      className="min-h-screen animate-pagein bg-[radial-gradient(ellipse_at_50%_0%,#FFF1F5_0%,transparent_60%)] bg-brand-white"
    >
      <div className="max-w-[680px] mx-auto px-5 sm:px-8 pt-[150px] pb-[110px]">
        <div className="text-center mb-14">
          <h1 className="font-display italic font-medium text-brand-deep text-[clamp(34px,6vw,48px)] m-0 mb-2.5">
            For You
          </h1>
          <div className="w-11 h-px bg-brand-rose/60 mx-auto" />
        </div>

        <div className="bg-white border border-brand-line rounded-lg p-7 sm:p-10 lg:p-14 shadow-[0_30px_60px_-30px_rgba(138,51,85,0.28)] relative">
          <div className="absolute top-[22px] left-[22px] right-[22px] h-0 border-t border-dashed border-brand-line" />
          <div className="font-display italic text-brand-deep text-[26px] mt-6 mb-[22px]">
            My dearest Chenda,
          </div>
          <p className="text-[16.5px] mb-5">
            I don't have a gift to put in your hands today — no box, no
            ribbon, nothing wrapped and tied with a bow. What I have instead
            is this: a small corner of the internet, made just for you,
            because you deserve to hear how much you mean to me, even when my
            hands come up empty.
          </p>
          <p className="text-[16.5px] mb-5">
            Since July 21st, you've been the person I look for in every good
            moment and lean on in every hard one. You make ordinary days feel
            worth remembering, and today, on our anniversary, I just want you
            to know: you are the gift. All of this — however small — is me
            trying to say thank you, for choosing me, for staying, for being
            exactly who you are.
          </p>
          <p className="text-[16.5px] mb-5">
            I hope this makes you smile, even just a little. That's really
            all I wanted today.
          </p>
          <p className="text-[16.5px] mb-5">
            Happy anniversary, Chenda. Here's to many more.
          </p>
          <div className="mt-8">
            <div className="flex items-center gap-1 text-[16.5px]">
              With all my love
              <HeartIcon className="text-brand-rose" size={12} />
            </div>
            <div className="font-display italic text-brand-deep text-xl mt-1">
              Always yours
            </div>
          </div>
        </div>
        <PhotoSlider />
      </div>
    </section>
  );
}
