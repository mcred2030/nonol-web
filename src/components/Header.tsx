"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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

const navLinks = [
  { name: "노놀이 뭔가요?", href: "#pageS01" },
  { name: "노놀에서 노래하면?", href: "#pageS02" },
  { name: "지금 신청하세요", href: "#pageS03" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 py-5 transition-all duration-300 ${
        isScrolled ? "bg-black/95" : "bg-black/90"
      }`}
    >
      <div className="max-w-header mx-auto px-5 flex justify-between items-center">
        <h1>
          <Link href="/" className="block w-[120px] h-[30px] relative">
            <Image
              src="/images/logo.svg"
              alt="NONOL"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </h1>

        <nav className="flex items-center gap-10">
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-4">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-6 h-6 relative opacity-80 hover:opacity-100 transition-opacity"
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
        </nav>
      </div>
    </header>
  );
}
