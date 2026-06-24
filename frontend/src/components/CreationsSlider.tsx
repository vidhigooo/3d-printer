"use client";

interface Creation {
  image: string;
  alt: string;
}

interface CreationsSliderProps {
  creations: Creation[];
}

export default function CreationsSlider({ creations }: CreationsSliderProps) {
  // Loop twice for smooth infinite marquee
  const loopedCreations = [...creations, ...creations];

  return (
    <div className="mt-12">
      <h4 className="text-2xl font-bold text-center mb-8">Our Creations</h4>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="creations-track flex w-max gap-6">
          {loopedCreations.map((creation, idx) => (
            <div
              key={`${creation.alt}-${idx}`}
              className="h-48 w-64 md:h-64 md:w-80 shrink-0 rounded-xl overflow-hidden border border-border bg-slate-100 dark:bg-slate-900 flex items-center justify-center relative group"
            >
              {/* Fallback styling in case image fails to load or doesn't exist yet */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900">
                 <span className="text-4xl mb-2">📷</span>
                 <span className="text-xs text-slate-700 dark:text-slate-300">{creation.alt}</span>
              </div>
              
              <img
                src={creation.image}
                alt={creation.alt}
                className="h-full w-full object-cover relative z-10 opacity-0 transition-opacity duration-300"
                onLoad={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "1";
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .creations-track {
          animation: creationsMarquee 35s linear infinite;
        }

        .creations-track:hover {
          animation-play-state: paused;
        }

        @keyframes creationsMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
