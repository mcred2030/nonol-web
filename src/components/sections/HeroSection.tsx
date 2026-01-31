"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: { mute: () => void; playVideo: () => void } }) => void;
            onStateChange?: (event: { data: number; target: { playVideo: () => void } }) => void;
          };
        }
      ) => void;
    };
  }
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<boolean>(false);

  useEffect(() => {
    if (playerRef.current) return;
    playerRef.current = true;

    // YouTube IFrame API 로드
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // YouTube Player 초기화
    window.onYouTubeIframeAPIReady = () => {
      if (window.YT) {
        new window.YT.Player("youtube-player", {
          videoId: "rxk7JOYh9eg",
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            rel: 0,
            playlist: "rxk7JOYh9eg",
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event) => {
              if (event.data === 0) {
                event.target.playVideo();
              }
            },
          },
        });
      }
    };
  }, []);

  return (
    <section className="relative w-full pb-[56.25%] bg-black">
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: "url(https://img.youtube.com/vi/rxk7JOYh9eg/maxresdefault.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="youtube-player" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" />
      </div>
    </section>
  );
}
