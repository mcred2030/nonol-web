"use client";

import Image from "next/image";

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCvsAVmLLU1YMOfnMlhOpx5w",
    icon: "/images/icon_yt.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nonol.playground/",
    icon: "/images/icon_ig.svg",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/NONOL.playground",
    icon: "/images/icon_fb.svg",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-10">
      <div className="max-w-header mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="text-center md:text-left">
          <div className="w-[100px] h-[25px] relative mb-2 mx-auto md:mx-0">
            <Image
              src="/images/logo_b.svg"
              alt="NONOL"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-text-light-gray">
            Copyright (c). 2022. NONOL. All Rights Reserved.
          </p>
        </div>

        <ul className="flex gap-4">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[30px] h-[30px] relative opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  fill
                  className="object-contain"
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={scrollToTop}
          className="w-[50px] h-[50px] border border-gray-700 hover:border-primary transition-colors flex items-center justify-center"
          aria-label="맨위로"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
