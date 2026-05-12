import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Modelling Service | VEKTOR3D SYSTEMS",
  description: "Professional 3D CAD modeling, product development, and reverse engineering services.",
};

const services = [
  {
    id: "cad-modelling",
    title: "CAD Modelling Service & Concept Generation",
    description: "We will help develop a 3D CAD design of your product that you can use for 3D printing, prototyping & mass production. The file we create for you can be sent to any 3D printing, prototyping & mass production company in the world so you don't have to stay with us after the design is complete.",
    image: "/cad_modelling.png",
  },
  {
    id: "product-development",
    title: "Product Development",
    description: "The product development must be both reliable and versatile. We check sizes, shapes, and proportions again and again, until you get it right. Eliminate any potential production bottlenecks or design flaws before they happen.",
    image: "/product_dev.png",
  },
  {
    id: "reverse-engineering",
    title: "Reverse Engineering",
    description: "We have extensive experience designing parts for 3D printing and mass production using the latest 3D design software. This means we can reverse engineer your original components to create a 3D file which can then be used to replicate your parts using 3D printing.",
    image: "/reverse.png",
  },
  {
    id: "miniature-designing",
    title: "Miniature & Model Designing",
    description: "3D Printed Miniatures are grooming the market. Vektor3DS can design and develop highly detailed and complex miniature models tailored to your exact specifications, whether for architecture, gaming, or display.",
    image: "/miniature_model.png",
  },
  {
    id: "sculpture-designing",
    title: "Sculpture & Character Designing",
    description: "We can design any sculpture, character or a model using just reference images. Our digital sculpting experts bring organic shapes and complex characters to life with stunning detail.",
    image: "/sculpture_design.png",
  },
];

export default function ThreeDModellingServicePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer { animation: shimmer 2.5s infinite; }
      `}} />

      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="space-y-8 relative z-10">

            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              3D Designing & 3D Modelling
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              We are professional designers who can help you in giving perfect shape to your ideas into CAD Modeling. 
            </p>
            

          </div>

          {/* Hero Visual */}
          <div className="relative w-full aspect-video lg:aspect-square max-h-[500px] rounded-[24px] bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.1)] flex items-center justify-center p-2 group hover:border-cyan-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full scale-75 group-hover:bg-cyan-400/20 transition-all duration-700" />
            
            <div className="absolute inset-0 overflow-hidden rounded-[24px] z-20 pointer-events-none">
              <div className="absolute -inset-full top-0 z-20 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shimmer" />
            </div>

            <video 
              src="/modelling.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-[20px] relative z-10 brightness-90 contrast-125"
            />
          </div>

        </div>
      </section>

      {/* Alternating Services Sections */}
      <section className="relative z-10 py-10">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="flex flex-col gap-24 md:gap-32 pb-24 pt-10">
            {services.map((service, index) => {
              const isEven = index % 2 !== 0;
              
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center group`}
                >
                  
                  {/* Image Container */}
                  <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl group-hover:border-cyan-500/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 mix-blend-overlay z-10 pointer-events-none" />
                    
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Glowing Accent */}
                    <div className={`absolute top-1/2 ${isEven ? 'left-0' : 'right-0'} w-1 h-32 bg-cyan-500 blur-sm transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`} />
                  </div>

                  {/* Text Container */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md group-hover:text-cyan-50 transition-colors">
                      {service.title}
                    </h2>
                    
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                    
                    <p className="text-lg text-slate-400 leading-relaxed pt-2 group-hover:text-slate-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
