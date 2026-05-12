"use client";

const clientLogos = [
  { name: "Shapoorji Pallonji", src: "/shapoorji%20pallonji.png" },
  { name: "KML", src: "/kml.png" },
  { name: "Tata", src: "/tata.png" },
  { name: "Schlumberger", src: "/schlumberger.png" },
  { name: "MNC", src: "/mnc.png" },
  { name: "Runwal", src: "/mqa.png" },
  { name: "ONGC", src: "/ongc.png" },
  { name: "Petronas", src: "/petronas.png" },
  { name: "Godrej", src: "/godrej.png" },
  { name: "Larsen & Turbo", src: "/larsen%26turbo.png" },
  { name: "Honda", src: "/honda.png" },
  { name: "JCB", src: "/jcb.png" },
  { name: "Asian Paints", src: "/asain%20paints.png" },
];

export default function ClientLogos() {
  const loopedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-8 underline underline-offset-8 decoration-2">
            Our Clients
          </h2>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="client-logo-track flex w-max gap-4">
              {loopedLogos.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="h-24 w-48 shrink-0 rounded-lg border border-border bg-card p-3 flex items-center justify-center"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-logo-track {
          animation: logoMarquee 30s linear infinite;
        }

        .client-logo-track:hover {
          animation-play-state: paused;
        }

        @keyframes logoMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}