import Link from "next/link";

export default function AboutSection() {
  return (
    <div id="pageS01" className="py-16 md:py-24">
      {/* 첫 번째 섹션 */}
      <section className="relative py-16 md:py-20 overflow-visible">
        {/* 장식 이미지 - 데스크톱에서만 표시 */}
        <div
          className="hidden lg:block absolute top-1/2 right-[-150px] w-[400px] h-[400px] -translate-y-1/2 bg-contain bg-no-repeat bg-center z-10"
          style={{ backgroundImage: "url(/images/img_slide.png)" }}
        />

        <div className="max-w-content mx-auto px-5">
          <h2 className="text-4xl md:text-6xl lg:text-[100px] font-black tracking-tight leading-tight mb-8 md:mb-10">
            노놀이 뭔가요?
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 md:mb-8">
            네, <br />
            <span className="text-primary">노놀</span>은 꿈을 키워가는 <br />
            뮤지션들을 위한 무대입니다.
          </p>
          <p className="text-base md:text-lg lg:text-[22px] font-medium leading-relaxed text-text-gray mb-8 md:mb-10">
            음악 그 자체가 즐거움인 뮤지션들을 위한 무대 <br className="hidden md:block" />
            음악 그 자체로 행복한 뮤지션들을 위한 무대 <br className="hidden md:block" />
            노래하는 놀이터는 노래로 놀 수 있는 인디뮤지션들을 위해 <br className="hidden md:block" />
            365일 24시간 오픈되어 있는 자유로운 무대입니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/channel/UCvsAVmLLU1YMOfnMlhOpx5w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 md:px-10 py-4 border-2 border-black text-black font-semibold hover:bg-primary hover:border-primary hover:text-white transition-all"
            >
              유튜브 채널
            </a>
            <a
              href="https://www.instagram.com/nonol.playground/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 md:px-10 py-4 border-2 border-black text-black font-semibold hover:bg-primary hover:border-primary hover:text-white transition-all"
            >
              공식 인스타그램
            </a>
          </div>
        </div>
      </section>

      {/* 두 번째 섹션 - 배경 회색 */}
      <section className="bg-bg-light py-16 md:py-20">
        <div className="max-w-content mx-auto px-5">
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 md:mb-8">
            사람들에게 꼭 들려주고 싶은 <br />
            소중한 <span className="text-primary">노래</span>가 있나요? <br />
            평가도 경쟁도 없습니다. <br />
            오로지 <span className="text-primary">음악</span>으로만 선택합니다.
          </p>
          <p className="text-base md:text-lg lg:text-[22px] font-medium leading-relaxed text-text-gray mb-8 md:mb-10">
            노래하고 싶은 꿈 꾸는 뮤지션들의 자유로운 놀이터 노놀은 <br className="hidden md:block" />
            노래만 준비되었다면 언제든지 오픈되어 있는 자유로운 무대입니다. <br className="hidden md:block" />
            어떤 조건도 없습니다. 얼마나 진심으로 노래하는지 <br className="hidden md:block" />
            그 마음만 전달할 수 있는 뮤지션이라면 언제나 환영합니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#pageS03"
              className="inline-block px-8 md:px-10 py-4 border-2 border-black text-black font-semibold hover:bg-primary hover:border-primary hover:text-white transition-all"
            >
              노놀에서 노래하고 싶어요
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
