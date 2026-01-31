const processSteps = [
  { title: "홈페이지\n신청서 접수", active: false, point: false },
  { title: "노놀\n필터링", active: false, point: false },
  { title: "아티스트\n선정", active: false, point: false },
  { title: "1차\n음악미팅", active: true, point: false },
  { title: "2차\n공연미팅", active: true, point: false },
  { title: "노놀\n공연", active: true, point: false },
  { title: "콘서트\n페스티벌 참여", active: false, point: true },
  { title: "앨범\n발매", active: false, point: true },
];

export default function ProcessSection() {
  return (
    <section className="bg-bg-light py-16 md:py-24">
      <div className="max-w-content mx-auto px-5">
        {/* 프로세스 영역 */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-16 md:mb-20">
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug shrink-0">
            <span className="text-primary">노놀</span>은<br />
            이렇게<br />
            합니다.
          </p>

          <ol className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
            {processSteps.map((step, index) => (
              <li key={index} className="flex justify-center">
                <div
                  className={`w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full border-2 flex items-center justify-center text-center transition-all ${
                    step.active
                      ? "bg-primary border-primary text-white"
                      : "border-black"
                  }`}
                >
                  <p
                    className={`text-sm md:text-base lg:text-lg font-semibold leading-snug whitespace-pre-line ${
                      step.point && !step.active ? "text-primary" : ""
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* 메시지 영역 */}
        <div className="text-center py-10 md:py-16">
          <div className="inline-block">
            <span className="text-6xl md:text-7xl lg:text-8xl font-extralight text-primary leading-none">
              "
            </span>
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-text-gray my-5">
              여러분들이 만들어낸 노놀 무대는 앨범이 되고 <br className="hidden md:block" />
              콘서트가 되고 커다란 페스티벌이 되어 많은 <br className="hidden md:block" />
              사람들에게 전달될 것이고 그 노래를 진심으로 <br className="hidden md:block" />
              사랑해주는 소중한 팬들을 만나는 <br className="hidden md:block" />
              기적 같은 일들을 경험하게 될 것입니다
            </p>
            <span className="text-6xl md:text-7xl lg:text-8xl font-extralight text-primary leading-none">
              "
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
