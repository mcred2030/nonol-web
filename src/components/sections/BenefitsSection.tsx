export default function BenefitsSection() {
  return (
    <div id="pageS02" className="py-16 md:py-24">
      {/* Support 섹션 */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-5">
          <h2 className="text-4xl md:text-6xl lg:text-[100px] font-black tracking-tight leading-tight mb-8 md:mb-10">
            노놀에서 노래하면,
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 md:mb-8">
            하나.<span className="text-primary">Support.</span>
          </p>
          <p className="text-base md:text-lg lg:text-[22px] font-medium leading-relaxed text-text-gray">
            음악을 사랑하는 사람들과 팀워크를 이루어 무대를 완성하게 됩니다. <br className="hidden md:block" />
            선정된 아티스트들은 음악 미팅이라는 시간을 통해 <br className="hidden md:block" />
            노놀의 뮤직 프로듀서와 자신의 음악에 대한 깊이 있는 이야기를 나눈 후, <br className="hidden md:block" />
            감각적인 아이디어를 함께해 줄 크리에이티브 디렉터와 <br className="hidden md:block" />
            멋지게 무대를 담아줄 감독이 함께하는 2차공연 미팅을 하게 됩니다. <br className="hidden md:block" />
            20분의 무대를 위해 전문가들이 끊임없이 서포트합니다.
          </p>
        </div>
      </section>

      {/* Album 섹션 */}
      <section className="relative bg-bg-light py-16 md:py-20 overflow-hidden">
        {/* 장식 이미지 */}
        <div
          className="hidden lg:block absolute top-1/2 left-[-100px] w-[300px] h-[300px] -translate-y-1/2 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/images/img_headphone.png)" }}
        />

        <div className="max-w-content mx-auto px-5 text-right">
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 md:mb-8">
            둘.<span className="text-primary">ALBUM.</span>
          </p>
          <p className="text-base md:text-lg lg:text-[22px] font-medium leading-relaxed text-text-gray">
            노놀에 참여한 뮤지션들은 자신의 곡 중 선택하여 <br className="hidden md:block" />
            멜론과 협업한 노놀 컴필레이션 앨범으로 음원이 발매됩니다.
          </p>
        </div>
      </section>

      {/* Concert & Festivals 섹션 */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* 장식 이미지 */}
        <div
          className="hidden lg:block absolute top-1/2 right-[-150px] w-[350px] h-[350px] -translate-y-1/2 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/images/img_turntable.png)" }}
        />

        <div className="max-w-content mx-auto px-5">
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 md:mb-8">
            셋.<span className="text-primary">CONCERT&FESTIVALS.</span>
          </p>
          <p className="text-base md:text-lg lg:text-[22px] font-medium leading-relaxed text-text-gray">
            노놀에 참여한 뮤지션들은 <br className="hidden md:block" />
            노놀에서 기획하는 콘서트와 페스티벌 참여에도 우선권을 가지게 됩니다.
            <br /><br />
            <strong>(콘서트 연 4회 / 페스티벌 연 1회 기획)</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
