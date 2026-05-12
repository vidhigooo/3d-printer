import { MapPin, Navigation, Phone, Mail } from "lucide-react";

const googleMapsUrl =
  "https://www.google.com/maps/dir/19.120128,72.8367104/Vektor3D+Systems+-+3D+Printing+Service+and+Repair+%7C+FDM+%7C+SLA+%7C+DLP+%7C+SLS,+Shop+No.+MG15,+Gala,+Samrat,+%26+4,+Shell+Colony+Rd,+near+Kamraj+Hall,+Sai+Baba+Nagar,+Chembur,+Mumbai,+Maharashtra+400071/@19.0882779,72.8315983,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7c9180d0a8e95:0x22fa1f937cbaaf61!2m2!1d72.8946024!2d19.0638701!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

const embeddedMapUrl =
  "https://www.google.com/maps?q=19.0638701,72.8946024&z=15&output=embed";

export default function LocationMap() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground underline underline-offset-8 decoration-2">
              Find Us
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Visit our workshop in Chembur or open the location directly in Google Maps for turn-by-turn directions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm min-h-[420px]">
              <iframe
                title="Vektor3D Systems location"
                src={embeddedMapUrl}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <MapPin className="h-4 w-4" />
                  Our Location
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                  Vektor3D Systems
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Shop No. MG15, Gala, Samrat, & 4, Shell Colony Rd, near Kamraj Hall, Sai Baba Nagar, Chembur, Mumbai, Maharashtra 400071
                </p>

                <div className="space-y-4 text-sm md:text-base">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-muted/60 p-4 hover:bg-muted transition-colors"
                  >
                    <Navigation className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">Open in Google Maps</span>
                  </a>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-muted/60 p-4 hover:bg-muted transition-colors"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium underline underline-offset-4">
                      Click to open the full location link
                    </span>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border/70 bg-muted/40 p-4">
                      <div className="flex items-center gap-2 mb-2 text-foreground font-medium">
                        <Phone className="h-4 w-4 text-primary" />
                        Call
                      </div>
                      <a href="tel:+919082020416" className="text-muted-foreground hover:text-foreground transition-colors">
                        +91-9082020416
                      </a>
                    </div>

                   <div className="rounded-xl border border-border/70 bg-muted/40 p-4">
                      <div className="flex items-center gap-2 mb-2 text-foreground font-medium">
                        <MapPin className="h-4 w-4 text-primary" />
                        Address
                      </div>
                      <a href="mailto:quotes@vektor3d.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        Shop No. 3 & 4, Opp. Kamraj Hall, Shell Colony Road,Sai Baba Nagar, Chembur, Mumbai - 400071
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}