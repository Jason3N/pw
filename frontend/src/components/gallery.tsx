import { useEffect, useId, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface GalleryItemProps {
  title?: string;
  description?: string;
  images?: GalleryImage[];
  autoPlayDelay?: number;
}

const GalleryItem = ({
  title,
  description,
  images = [],
  autoPlayDelay = 3000,
}: GalleryItemProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const carouselId = useId();
  const hasPhotos = images.length > 0;
  const hasMultiplePhotos = images.length > 1;
  const activeCaption = images[activeIndex]?.caption;

  useEffect(() => {
    if (!hasMultiplePhotos || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, autoPlayDelay);

    return () => window.clearInterval(timer);
  }, [activeIndex, autoPlayDelay, hasMultiplePhotos, images.length, isPaused]);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, Math.max(images.length - 1, 0)));
  }, [images.length]);

  const selectPhoto = (index: number) => setActiveIndex(index);
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % images.length);

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || !hasMultiplePhotos) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 40) {
      if (distance > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }
    touchStartX.current = null;
  };

  return (
    <article
      className="m-6 flex h-full max-w-sm flex-col overflow-hidden rounded-2xl border-y border-white/10 border-x-8 border-t-8 border-t-white border-x-white rounded-lg bg-[#15181C] shadow-xl shadow-black/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      {hasPhotos ? (
        <div
          id={carouselId}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${title ?? "Gallery"} photos`}
          className="relative aspect-[4/5] overflow-hidden bg-[#0E1013]"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <figure key={`${image.src}-${index}`} className="flex h-full min-w-full flex-col bg-[#0E1013]">
                <img
                  src={image.src}
                  alt={image.alt ?? `${title ?? "Gallery"} photo ${index + 1}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </figure>
            ))}
          </div>

          {hasMultiplePhotos && (
            <>
              <button
                type="button"
                aria-label="Show previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2.5 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={showPrevious}
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Show next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2.5 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={showNext}
              >
                <FaChevronRight aria-hidden="true" />
              </button>
              <div className="absolute inset-x-0 top-3 flex justify-center gap-2">
                {images.map((image, index) => (
                  <button
                    key={`dot-${image.src}-${index}`}
                    type="button"
                    aria-label={`Show photo ${index + 1} of ${images.length}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                      index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                    onClick={() => selectPhoto(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-[#75E6DA]/25 via-[#22282E] to-[#5F91FF]/25 p-8 text-center text-sm text-slate-300">
          Add photos with the <code className="mx-1 rounded bg-black/20 px-1 py-0.5">images</code> prop.
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 text-black bg-white">
        {activeCaption && <p className="text-sm leading-6">{activeCaption}</p>}
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {description && <p className="mt-2 text-sm leading-6">{description}</p>}
        {hasMultiplePhotos && (
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em]">
            {activeIndex + 1} / {images.length}
          </p>
        )}
      </div>
    </article>
  );
};

export default GalleryItem;
