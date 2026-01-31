"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";

const wordOptions = ["싱어송라이터", "보컬", "밴드", "연주자", "기타"];

interface UploadedFile {
  id: string;
  name: string;
}

export default function ApplicationSection() {
  const [formData, setFormData] = useState({
    artist: "",
    cname: "",
    tel: "",
    email: "",
    memo: "",
    memo2: "",
    mvurl: "",
    word: "싱어송라이터",
    etcword: "",
    agreed: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreed: e.target.checked }));
  };

  const handleWordChange = (word: string) => {
    setFormData((prev) => ({ ...prev, word }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const allowedExtensions = ["mp3", "txt", "pdf"];

    Array.from(files).forEach((file) => {
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (!allowedExtensions.includes(ext)) {
        alert("음원은 MP3 파일, 가사는 TXT 또는 PDF로 첨부해주세요.");
        return;
      }

      // 파일 추가 (실제 구현시 서버 업로드 필요)
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
      };
      setUploadedFiles((prev) => [...prev, newFile]);
    });

    // 파일 입력 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.artist) {
      alert("아티스트명을 입력해주세요.");
      return;
    }
    if (!formData.cname) {
      alert("대표자이름을 입력해주세요.");
      return;
    }
    if (!formData.tel) {
      alert("연락처를 입력해주세요.");
      return;
    }
    if (!formData.email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!formData.agreed) {
      alert("개인정보 처리 동의 해주셔야 등록이 가능합니다.");
      return;
    }

    // 폼 제출 (실제 구현시 API 호출 필요)
    console.log("Form submitted:", formData, uploadedFiles);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.href = "/";
  };

  return (
    <>
      <section id="pageS03" className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-5">
          <h2 className="text-4xl md:text-6xl lg:text-[100px] font-black tracking-tight leading-tight mb-8 md:mb-10">
            노놀에 신청하세요.
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 md:mb-8">
            노놀의 <span className="text-primary">주인공</span>이 될 뮤지션은 <br />
            오직 노래로만 결정합니다.
          </p>
          <p className="text-base md:text-lg lg:text-[22px] font-medium leading-relaxed text-text-gray mb-10 md:mb-16">
            컴퓨터 속에 꽁꽁 감쳐둔 음악 또는 발매했지만, 더 많은 사람에게 다시 들려주고 싶은 음악 <br className="hidden md:block" />
            하루에도 몇 번씩 누군가에게 들려주고 싶었던 소중한 음악이 있다면 노놀에서 연주하고 노래하세요. <br className="hidden md:block" />
            노놀의 신청 방법은 간단합니다. 신청서를 작성하고 등록하세요!
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 기본 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">아티스트명</label>
                <input
                  type="text"
                  name="artist"
                  value={formData.artist}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">대표자이름</label>
                <input
                  type="text"
                  name="cname"
                  value={formData.cname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">연락처</label>
                <input
                  type="text"
                  name="tel"
                  value={formData.tel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">이메일</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* 음악 파일 */}
            <div>
              <label className="block text-base font-semibold mb-3">
                노놀에서 들려주고 싶은 음악 4곡 (음악파일+가사)
              </label>
              <textarea
                name="memo"
                value={formData.memo}
                onChange={handleInputChange}
                placeholder="*본인이 참여한 음악 4곡 (노놀과 함께 발매할 미발매 음원 1곡 필수 포함)"
                className="w-full px-4 py-4 border border-gray-300 focus:border-primary focus:outline-none transition-colors min-h-[120px] resize-y"
              />
              <div className="mt-4">
                <div className="relative inline-block">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".mp3,.txt,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    className="px-5 py-3 bg-black text-white text-sm cursor-pointer hover:bg-gray-800 transition-colors"
                  >
                    첨부파일 추가
                  </button>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
                      >
                        <span className="text-sm">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(file.id)}
                          className="text-xs text-gray-500 hover:text-red-500"
                        >
                          지우기
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 활동 계획 */}
            <div>
              <label className="block text-base font-semibold mb-3">
                노놀을 지원하게 된 계기 및 앞으로의 활동 계획
              </label>
              <textarea
                name="memo2"
                value={formData.memo2}
                onChange={handleInputChange}
                placeholder="*음원, 공연, 유튜브등 노놀 출연 이후 앞으로의 활동 계획을 작성해주세요."
                className="w-full px-4 py-4 border border-gray-300 focus:border-primary focus:outline-none transition-colors min-h-[120px] resize-y"
              />
            </div>

            {/* 라이브 영상 URL */}
            <div>
              <label className="block text-base font-semibold mb-3">
                가장 자신 있는 곡 라이브 영상 URL
              </label>
              <input
                type="text"
                name="mvurl"
                value={formData.mvurl}
                onChange={handleInputChange}
                placeholder="*파일 업로드는 불가능 합니다. URL을 작성해주세요."
                className="w-full px-4 py-4 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* 분류 선택 */}
            <div>
              <label className="block text-base font-semibold mb-3">
                이 중 본인(팀)을 가장 잘 표현하는 단어는 무엇인가요?
              </label>
              <div className="flex flex-wrap gap-3">
                {wordOptions.map((word) => (
                  <div key={word} className="flex items-center gap-2">
                    <label
                      className={`inline-block px-6 py-3 border-2 cursor-pointer transition-all ${
                        formData.word === word
                          ? "border-primary text-primary"
                          : "border-gray-300 hover:border-primary"
                      }`}
                      onClick={() => handleWordChange(word)}
                    >
                      <span>{word}</span>
                    </label>
                    {word === "기타" && formData.word === "기타" && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm">:</span>
                        <input
                          type="text"
                          name="etcword"
                          value={formData.etcword}
                          onChange={handleInputChange}
                          placeholder="*자유롭게 작성해주세요"
                          className="px-3 py-2 border-b border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 안내사항 */}
            <div>
              <label className="block text-base font-semibold mb-3">
                제출하기 전 꼭! 확인 해주세요.
              </label>
              <ol className="space-y-1 text-sm text-text-gray">
                <li>1. 음원은 MP3 파일, 가사는 TXT 또는 PDF로 첨부해주세요.</li>
                <li>2. 라이브 영상은 파일 제출이 어렵습니다. 영상을 업로드 한 URL을 적어주세요.</li>
                <li>3. 선정된 뮤지션에게는 신청 20일 이내로 개별 연락드립니다.</li>
              </ol>
            </div>

            {/* 개인정보 동의 */}
            <div>
              <label className="block text-base font-semibold mb-3">
                개인정보 수집 및 이용 동의
              </label>
              <ol className="space-y-1 text-sm text-text-gray mb-4">
                <li>1. 수집 정보 : 이름·휴대폰번호·이메일주소</li>
                <li>2. 이용 목적 : 신청접수 및 선정 / 노놀 운영을 위한 커뮤니케이션 통로 확보</li>
                <li>3. 이용 기간 : 신청접수 후 6개월 보관</li>
              </ol>
            </div>

            <div>
              <label className="block text-base font-semibold mb-3">
                위 사항을 숙지하였으며 개인정보 수집 및 이용에 동의하실 경우 체크해주세요.
              </label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="text-sm">동의합니다.</span>
                </label>
              </div>
              <span className="block mt-2 text-sm text-text-gray">
                *개인정보 처리에 거부하실 권리가 있으나 신청 접수가 불가능 할 수 있습니다.
              </span>
            </div>

            {/* 제출 버튼 */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="px-16 py-4 bg-primary border-2 border-primary text-white font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                신청하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 완료 팝업 */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={handlePopupClose} />
          <div className="relative bg-white px-16 py-12 text-center z-10">
            <p className="text-2xl font-semibold mb-8">노놀 신청이 완료 되었습니다.</p>
            <button
              onClick={handlePopupClose}
              className="px-10 py-3 border-2 border-black font-semibold hover:bg-primary hover:border-primary hover:text-white transition-all"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}
