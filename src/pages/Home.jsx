import { useState } from 'react';
import HeartIcon from '../components/HeartIcon.jsx';

export default function Home({ setPage }) {
  const [opened, setOpened] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-[150px] pb-[90px] bg-[radial-gradient(ellipse_at_50%_-10%,#FFE1EA_0%,transparent_55%)] bg-brand-white animate-pagein"
    >
      <div className="text-sm text-brand-rose/85 mb-1.5">To Heang Chenda</div>
      <h1 className="font-display italic font-medium text-brand-deep text-[clamp(48px,10vw,88px)] leading-[1.05] m-0 mb-2.5">
        Happy Anniversary
      </h1>
      <p className="text-base text-brand-ink/75 max-w-[420px] m-0 mb-14">
        A small corner of the internet, made just for you — July 21st.
      </p>

      <div
        className="[perspective:1000px] cursor-pointer select-none"
        onClick={() => setOpened(true)}
      >
        <div className="relative w-[230px] h-[150px] mx-auto">
          {/* side shadows */}
          <div className="absolute right-0 top-0 w-0 h-0 border-r-[115px] border-r-brand-blushSoft border-b-[75px] border-b-transparent z-[2]" />
          <div className="absolute left-0 top-0 w-0 h-0 border-l-[115px] border-l-brand-blushSoft border-b-[75px] border-b-transparent z-[2]" />
          {/* body */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-blushSoft border border-brand-line rounded-md shadow-[0_20px_40px_-18px_rgba(138,51,85,0.35)]" />
          {/* letter card */}
          <div
            className={
              'absolute left-2 right-2 bottom-1.5 h-[120px] bg-white border border-brand-line rounded-[5px] z-[3] flex items-center justify-center text-center p-3.5 transition-transform duration-[600ms] delay-150 [transition-timing-function:cubic-bezier(0.2,0.7,0.3,1)] ' +
              (opened ? '-translate-y-[46px]' : 'translate-y-1.5')
            }
          >
            <p className="font-display italic text-[15px] text-brand-deep m-0">
              for you
            </p>
          </div>
          {/* flap */}
          <div
            className={
              'absolute top-0 left-0 w-full h-0 border-l-[115px] border-l-transparent border-r-[115px] border-r-transparent border-t-[78px] border-t-brand-pink [transform-origin:top] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.6,0.1,0.25,1)] z-[4] ' +
              (opened ? '[transform:rotateX(180deg)]' : '')
            }
          />
          {/* seal */}
          <div
            className={
              'absolute left-1/2 top-[66px] w-[34px] h-[34px] rounded-full bg-brand-rose flex items-center justify-center shadow-[0_6px_14px_-4px_rgba(214,92,126,0.6)] z-[5] text-white transition-all duration-300 delay-100 ' +
              (opened
                ? 'opacity-0 [transform:translate(-50%,-14px)]'
                : 'opacity-100 [transform:translate(-50%,0)]')
            }
          >
            <HeartIcon size={16} />
          </div>
        </div>
      </div>
      <div
        className={
          'mt-[26px] text-[13px] text-brand-rose/85 transition-opacity duration-300 ' +
          (opened ? 'opacity-0' : 'opacity-100')
        }
      >
        tap the envelope to open it
      </div>

      <div
        className={
          'max-w-[480px] mx-auto mt-[52px] overflow-hidden transition-all duration-700 ' +
          (opened ? 'opacity-100 max-h-[400px]' : 'opacity-0 max-h-0')
        }
      >
        <p className="text-[16.5px] text-brand-ink">
          I don't have anything to hand you today — no gift, no ribbon. Just
          this. I hope it makes you happy.
        </p>
        <div className="flex gap-4 justify-center mt-5 flex-wrap">
          <button
            onClick={() => setPage('letter')}
            className="inline-block py-2.5 px-6 rounded-full border border-brand-rose bg-brand-rose text-white text-sm cursor-pointer transition-colors duration-300 hover:bg-brand-deep hover:border-brand-deep"
          >
            Read my letter
          </button>
          <button
            onClick={() => setPage('about')}
            className="inline-block py-2.5 px-6 rounded-full border border-brand-rose text-brand-deep bg-transparent text-sm cursor-pointer transition-colors duration-300 hover:bg-brand-rose hover:text-white"
          >
            About us
          </button>
        </div>
      </div>
    </section>
  );
}
