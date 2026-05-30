"use client";

import { useRef, useState } from "react";

type HeroVideoProps = {
  src?: string;
  posterWebp?: string;
  posterJpg?: string;
  label?: string;
};

/**
 * Click-to-play hero video.
 *
 * Performance:
 *   - preload="none" on the <video> means the mp4 is NOT requested on page load.
 *     Only the small poster image (~29KB webp / 43KB jpg) is fetched.
 *   - aspect-ratio is fixed (404/720) so the slot is reserved before the
 *     poster paints, preventing CLS.
 *   - On click the <video> mounts and starts playback (with sound) inside a
 *     user gesture, which browsers permit.
 */
export default function HeroVideo({
  src = "/video/do-what-you-do-best.mp4",
  posterWebp = "/video/do-what-you-do-best-poster.webp",
  posterJpg = "/video/do-what-you-do-best-poster.jpg",
  label = "Play music video: Do what you do best",
}: HeroVideoProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* If the browser blocks audio autoplay, the user can press the native
           control to start playback. */
      });
    });
  };

  return (
    <div
      className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto rounded-sm overflow-hidden bg-ink/90"
      style={{ aspectRatio: "404 / 720" }}
    >
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          preload="metadata"
          poster={posterJpg}
          className="w-full h-full object-cover block"
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={label}
          className="group relative w-full h-full p-0 m-0 border-0 cursor-pointer block"
        >
          <picture>
            <source srcSet={posterWebp} type="image/webp" />
            <img
              src={posterJpg}
              alt=""
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover block"
            />
          </picture>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center transition-transform duration-150 group-hover:scale-110"
          >
            <svg
              viewBox="0 0 64 64"
              width="88"
              height="88"
              className="drop-shadow-lg"
            >
              <circle cx="32" cy="32" r="32" fill="#6B8068" />
              <path d="M26 20 L46 32 L26 44 Z" fill="#FAFAF6" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
