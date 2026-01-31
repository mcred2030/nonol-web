export default function ContactSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-content mx-auto px-5 text-center">
        <p className="text-lg text-text-gray mb-5">
          노놀에 대한 궁금한 것이 있나요?
        </p>
        <a
          href="mailto:nonol_apply@nonol.kr"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary underline hover:no-underline transition-all"
        >
          nonol_apply@nonol.kr
        </a>
      </div>
    </section>
  );
}
