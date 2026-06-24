"use client";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-24 selection:bg-cyan-500/30 text-foreground bg-background">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-cyan-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] -right-[10%] h-[50%] w-[40%] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="container relative mx-auto px-6 max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            We are hiring dynamic professionals
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Are you ready for your next challenge? Join Vektor3D Systems LLP, one of India's premier and largest homegrown 3D printer manufacturers.
          </p>
        </motion.div>

        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">Current Openings</h2>

        <div className="space-y-8">
          {/* Sales Executive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl border border-border bg-slate-100 dark:bg-slate-900/50 p-8 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-border pb-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Sales Executive (Female)</h3>
                <div className="flex items-center gap-4 text-sm text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Full-time</span>
                  <span>Chembur, Mumbai</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <div className="text-lg font-semibold text-foreground">₹15,000 - ₹25,000 / month</div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-slate-700 dark:text-slate-300">
              <p>
                Vektor3D Systems LLP is one of India's premier and largest homegrown 3D printer manufacturer and the first local brand to export 3D printers globally. We are a technology-centred and people-driven company that design and manufactures industrial-grade 3D printers and additive manufacturing solutions.
                If you are highly motivated, growth hungry, love technology then we are looking for you.
              </p>
              
              <h4 className="text-foreground font-semibold mt-6 mb-2">Job Description:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Generate new business leads and analyzing the leads data.</li>
                <li>Exploring different sources for leads generation - IndiaMart, TradeIndia, Export India and Justdial.</li>
                <li>Analyse customer insights, consumer trends, competition analysis, market analysis to build successful marketing strategies.</li>
                <li>Developing and managing the marketing strategies.</li>
                <li>Preparing and presenting weekly, monthly and quarterly reports for senior management.</li>
                <li>Managing team members, collaborating with agencies and other vendor partners and reviewing their work.</li>
                <li>Keeping all marketing collaterals updated.</li>
                <li>Keeping track of latest marketing strategies and industry trends.</li>
                <li>Plan and execute all marketing activities including campaigns, exhibitions, social media posts, Ads, Webinars, SEO/SEM, Videos, email marketing etc.</li>
              </ul>

              <h4 className="text-foreground font-semibold mt-6 mb-2">Requirements:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Educational Qualifications: Graduate (3D Printing Industry Experience is a plus)</li>
                <li>Age: Up to 30 years</li>
                <li>Extensive knowledge of marketing strategies, channels, branding and working knowledge of different social media platforms.</li>
                <li>Superb leadership, communication, and collaboration abilities.</li>
                <li>Strong time management and organizational abilities.</li>
                <li>Experience: Sales/Marketing: 1 year (Preferred)</li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/919082020416?text=I%20am%20interested%20in%20the%20Sales%20Executive%20(Female)%20position."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-foreground font-medium transition-colors"
              >
                Apply via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Production Engineer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl border border-border bg-slate-100 dark:bg-slate-900/50 p-8 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-border pb-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Production Engineer</h3>
                <div className="flex items-center gap-4 text-sm text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Full-time</span>
                  <span>Chembur, Mumbai</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <div className="text-lg font-semibold text-foreground">₹10,000 - ₹17,000 / month</div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-slate-700 dark:text-slate-300">
              <h4 className="text-foreground font-semibold mt-0 mb-2">Day-to-day responsibilities include:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Participating in 3D printer manufacturing</li>
                <li>Operate and troubleshoot FDM, SLA and DLP 3D printer machines</li>
                <li>Process and implement modern post processing techniques.</li>
                <li>Prepare files for 3D printing.</li>
                <li>Performing quality check and maintaining SOP standards.</li>
                <li>Maintain machines and ensure all tools and materials needed are on hand to ensure continuous production.</li>
                <li>Perform post-printing and surface finishing - Sanding, Buffing, Painting and Curing.</li>
                <li>Preparation of 3D printing operation Reports on need basis for Documentation purpose.</li>
                <li>Maintain a clean and orderly work area.</li>
                <li>Troubleshooting the errors occurred in 3D printers to reduce the downtime.</li>
              </ul>

              <h4 className="text-foreground font-semibold mt-6 mb-2">Skills & Education:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Qualification: B.E/B.Tech (Mechanical or Electronics).</li>
                <li>Computer Skills: Basic Computer knowledge. Knowledge of 3D Software is a plus.</li>
                <li>Basic understanding of maintenance and repair work.</li>
              </ul>

              <h4 className="text-foreground font-semibold mt-6 mb-2">Who can apply:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Are available for full time on an immediate basis.</li>
                <li>Have relevant skills and interests.</li>
                <li>Who can handle pressure and can meet timely deadlines.</li>
                <li>BE Mechanical Fresher</li>
              </ul>
              <p className="mt-4">Number of openings: 5</p>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/919082020416?text=I%20am%20interested%20in%20the%20Production%20Engineer%20position."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-foreground font-medium transition-colors"
              >
                Apply via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
