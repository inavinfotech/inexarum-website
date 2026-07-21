import React, { useEffect, useState, useRef } from "react";
import SEOHead from "../components/SEOHead";

const ARTICLES = [
  { id: "article-1", num: "ARTICLE I", label: "General Declarations & Scope" },
  { id: "article-2", num: "ARTICLE II", label: "Information Categorization & Collection" },
  { id: "article-3", num: "ARTICLE III", label: "Data Utilization & Purposes" },
  { id: "article-4", num: "ARTICLE IV", label: "Disclosure & Transfer of Data" },
  { id: "article-5", num: "ARTICLE V", label: "Security & Encryption Standards" },
  { id: "article-6", num: "ARTICLE VI", label: "Retention & Purging Schedule" },
  { id: "article-7", num: "ARTICLE VII", label: "Data Subject Rights (DPDP & GDPR)" },
  { id: "article-8", num: "ARTICLE VIII", label: "Minors & Vulnerable Subjects" },
  { id: "article-9", num: "ARTICLE IX", label: "Execution & Grievance Redressal" },
];

const Privacy = () => {
  const [activeArticle, setActiveArticle] = useState("article-1");
  const articleRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const art of ARTICLES) {
        const el = articleRefs.current[art.id];
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveArticle(art.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToArticle = (id) => {
    const el = articleRefs.current[id];
    if (el) {
      const offset = el.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setActiveArticle(id);
    }
  };

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-800 pt-24 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy and Corporate Data Charter of iNexarum Private Limited. Formatted as an official legal instrument in compliance with the DPDP Act 2023."
        keywords="privacy policy, data charter, iNexarum legal, DPDP compliance India, corporate terms"
        path="/privacy"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inexarum.in/" },
            { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://inexarum.in/privacy" }
          ]
        }}
      />

      <div className="max-w-6xl mx-auto mt-6">
        {/* Mobile Navigation Quick Jump */}
        <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-2.5 shadow-sm mb-6 overflow-x-auto no-scrollbar flex gap-2">
          {ARTICLES.map((art) => (
            <button
              key={art.id}
              onClick={() => scrollToArticle(art.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg border text-xs font-semibold font-mono transition-all shrink-0 ${
                activeArticle === art.id
                  ? "bg-[#2a498c] text-white border-[#2a498c]"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {art.num}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column Spacer (occupies space in flow) */}
          <aside className="hidden lg:block lg:col-span-4">
            {/* Sticky Inner Container */}
            <div 
              data-lenis-prevent
              className="sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 toc-scrollbar space-y-6"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#2a498c] mb-6 pb-2 border-b border-slate-100">
                  Index of Articles
                </h3>
                <div className="space-y-4">
                  {ARTICLES.map((art) => {
                    const isActive = activeArticle === art.id;
                    return (
                      <button
                        key={art.id}
                        onClick={() => scrollToArticle(art.id)}
                        className={`w-full text-left group transition-all text-xs ${
                          isActive ? "text-[#2a498c] font-bold" : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        <div className="flex justify-between items-baseline gap-2">
                          <span className="shrink-0 font-mono tracking-wider">{art.num}</span>
                          <span className={`w-full border-b border-dotted ${isActive ? "border-[#2a498c]" : "border-slate-200 group-hover:border-slate-400"}`}></span>
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-400 group-hover:text-slate-600">
                          {art.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Verification Stamp Visual */}
              <div className="border border-slate-200 rounded-2xl p-5 text-center relative overflow-hidden bg-white shadow-xs">
                <div className="border border-double border-[#2a498c] p-3 rounded-xl text-[#2a498c] font-mono text-[10px] tracking-wider uppercase rotate-[-3deg] select-none bg-[#2a498c]/5">
                  <p className="font-bold mb-1">Approved & Certified</p>
                  <p className="font-semibold text-slate-800">iNexarum Compliance</p>
                  <p className="text-[8px] mt-0.5 opacity-80">2026 Corporate Seal</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Pleading Paper Sheet */}
          <article className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-3 z-0">
              <div className="text-[100px] font-bold text-[#2a498c]/5 rotate-[-45deg] tracking-[0.2em] font-mono">
                INEXARUM LEGAL
              </div>
            </div>

            {/* Document Header block inside Right content container */}
            <div className="text-center space-y-3 mb-12 border-b-4 border-double border-[#2a498c] pb-8 relative z-10">
              <p className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase">
                Corporate Instrument • Ref: IX-PRIVACY-2026-V2
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
                Privacy Policy & Data Charter
              </h1>
              <p className="text-sm font-medium italic text-slate-500">
                Promulgated by the Board of iNexarum Private Limited
              </p>
              <div className="text-[11px] font-mono text-[#2a498c] font-semibold mt-2">
                EFFECTIVE DATE: 21 JULY 2026
              </div>
            </div>

            <div className="relative z-10 space-y-12 text-justify leading-relaxed font-serif text-sm sm:text-base text-slate-900">
              
              {/* Preface / Preamble */}
              <div className="italic border-l-4 border-[#2a498c] pl-4 py-1 text-slate-600 text-xs sm:text-sm font-sans">
                <strong>PREAMBLE:</strong> This Instrument constitutes the Privacy Policy and General Data Charter of iNexarum Private Limited. It governs the processing of individual and corporate personal data, ensuring accountability under the laws of the Republic of India.
              </div>

              {/* ARTICLE I */}
              <section
                id="article-1"
                ref={(el) => (articleRefs.current["article-1"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE I</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">General Declarations & Scope</h3>
                </div>
                <p>
                  <strong>Section 1.01. Parties.</strong> Welcome to <strong>iNexarum Private Limited</strong> (hereinafter referred to as the “Company,” “we,” “us,” or “our”), a DPIIT recognized digital agency based in India, dedicated to delivering robust custom web development, mobile app development, scalable software solutions, and intelligent AI-driven automation systems.
                </p>
                <p>
                  <strong>Section 1.02. Scope.</strong> This Document sets forth the practices by which the Company collects, processes, stores, shares, protects, and disposes of personal, corporate, and system data. This policy is binding on all users visiting our website at <a href="https://inexarum.in" className="text-[#2a498c] hover:underline font-sans font-semibold">inexarum.in</a> (the “Site”), engaging our professional agency services, or logging into our corporate portals and administrative systems (collectively, the “Services”).
                </p>
                <p>
                  <strong>Section 1.03. Assent.</strong> Accessing our Site, onboarding as a client, or executing a service contract constitutes your explicit consent to this Data Charter. If you do not assent to these terms, you are directed to immediately exit the Site and terminate service inquiries.
                </p>
              </section>

              {/* ARTICLE II */}
              <section
                id="article-2"
                ref={(el) => (articleRefs.current["article-2"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE II</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Information Categorization & Collection</h3>
                </div>
                <p>
                  In order to execute custom engineering, maintain secure systems, and address corporate communications, the Company collects and records the following categories of information:
                </p>
                <ul className="list-decimal pl-6 space-y-3 text-xs sm:text-sm">
                  <li>
                    <strong>Identifiable Personal Data:</strong> Specific descriptors including names, email coordinates, physical billing locations, corporate affiliations, and contact numbers gathered during consultations, user creations, or inquiries.
                  </li>
                  <li>
                    <strong>Client Project Records:</strong> Source configurations, database schemas, mockups, code directories, and associated business assets provided by clients under SOW parameters for engineering.
                  </li>
                  <li>
                    <strong>Tax & Financial Identifiers:</strong> Payment registries, transaction markers, and Indian Goods and Services Tax (GST) numbers provided for lawful corporate invoicing.
                  </li>
                  <li>
                    <strong>Technical Usage Parameters:</strong> Automated indicators logged upon system access, including IP addresses, system operating profiles, browser agents, navigation flow patterns, and geographic coordinates.
                  </li>
                </ul>
              </section>

              {/* ARTICLE III */}
              <section
                id="article-3"
                ref={(el) => (articleRefs.current["article-3"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE III</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Data Utilization & Purposes</h3>
                </div>
                <p>
                  The processing of collected data shall be restricted to legitimate business actions, governed by the following covenants:
                </p>
                <p>
                  <strong>Section 3.01. Execution of Milestones.</strong> We utilize project files, codebase directories, and API parameters to execute custom software engineering, perform server deployments, and manage system upkeep as contracted.
                </p>
                <p>
                  <strong>Section 3.02. Account Management.</strong> We process personal and billing indicators to establish client profiles, compile statements, resolve payments, and issue legal tax invoices.
                </p>
                <p>
                  <strong>Section 3.03. Communication.</strong> We employ email addresses and telephone coordinates to dispatch updates on project timelines, administrative announcements, and security reports.
                </p>
                <p>
                  <strong>Section 3.04. System Security.</strong> Server access logs and network metrics are monitored to protect infrastructure from breach, verify user logins, and track unauthorized activities.
                </p>
              </section>

              {/* ARTICLE IV */}
              <section
                id="article-4"
                ref={(el) => (articleRefs.current["article-4"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE IV</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Disclosure & Transfer of Data</h3>
                </div>
                <p>
                  The Company covenants not to sell, barter, lease, or distribute data to third-party data brokers. Data transfers are permitted only under the following exceptions:
                </p>
                <p>
                  <strong>Section 4.01. Authorized Service Partners.</strong> We share parameters with cloud hosting companies, billing gateways, and diagnostic services that perform auxiliary duties for us. These entities are bound by non-disclosure agreements restricting data use solely to company instructions.
                </p>
                <p>
                  <strong>Section 4.02. Statutory Commands.</strong> We may transfer data to Indian state or central authorities when required by Section 69 of the Information Technology Act, 2000, or by order of court, law enforcement agencies, or compliance officers.
                </p>
                <p>
                  <strong>Section 4.03. Corporate Transactions.</strong> If the Company undergoes a merger, purchase, or asset consolidation, client databases may be transferred to the succeeding entity, with notice sent to clients beforehand.
                </p>
              </section>

              {/* ARTICLE V */}
              <section
                id="article-5"
                ref={(el) => (articleRefs.current["article-5"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE V</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Security & Encryption Standards</h3>
                </div>
                <p>
                  <strong>Section 5.01. Cybersecurity Defenses.</strong> The Company employs robust security protocols to prevent data breach, loss, alteration, or interception:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
                  <li>Data transfers are protected by HTTPS protocols utilizing TLS 1.3 standards.</li>
                  <li>Backups, client databases, and server configurations are encrypted at rest using AES-256 standards.</li>
                  <li>Developer access to project files is governed by identity management controls and non-disclosure clauses.</li>
                </ul>
                <p>
                  <strong>Section 5.02. Indemnity Limitation.</strong> While the Company utilizes industry-standard safety practices, no database is invulnerable. You acknowledge that you share credentials and portal access keys at your own risk.
                </p>
              </section>

              {/* ARTICLE VI */}
              <section
                id="article-6"
                ref={(el) => (articleRefs.current["article-6"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE VI</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Retention & Purging Schedule</h3>
                </div>
                <p>
                  The Company preserves data only for the duration required to fulfill contractual and legal duties:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
                  <li><strong>Identifiable Profile Data:</strong> Kept for the duration of the corporate partnership or client agreement.</li>
                  <li><strong>Project Deliverables:</strong> Archived or removed within 90 days of contract close out, subject to ongoing warranty covenants.</li>
                  <li><strong>Sales Inquiries:</strong> Retained for a maximum of two (2) fiscal years to analyze sales funnels and verify proposals.</li>
                </ul>
              </section>

              {/* ARTICLE VII */}
              <section
                id="article-7"
                ref={(el) => (articleRefs.current["article-7"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE VII</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Data Subject Rights (DPDP & GDPR)</h3>
                </div>
                <p>
                  Pursuant to the **Digital Personal Data Protection (DPDP) Act, 2023** (India) and the **General Data Protection Regulation (GDPR)** (EU), data subjects have the following legal entitlements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif mt-2">
                  <div className="border border-slate-200 p-3 bg-slate-50/50 rounded-lg">
                    <p className="font-bold uppercase text-slate-900 mb-1 font-sans">Right to Access</p>
                    <p className="text-slate-600 leading-relaxed">
                      You are entitled to request and receive confirmation of all personal data held by the Company.
                    </p>
                  </div>
                  <div className="border border-slate-200 p-3 bg-slate-50/50 rounded-lg">
                    <p className="font-bold uppercase text-slate-900 mb-1 font-sans">Right to Correction & Erasure</p>
                    <p className="text-slate-600 leading-relaxed">
                      You are entitled to correct errors or request deletion of data, subject to legal retention obligations.
                    </p>
                  </div>
                  <div className="border border-slate-200 p-3 bg-slate-50/50 rounded-lg">
                    <p className="font-bold uppercase text-slate-900 mb-1 font-sans">Right to Object</p>
                    <p className="text-slate-600 leading-relaxed">
                      You may object to processing carried out for marketing or statistical analysis.
                    </p>
                  </div>
                  <div className="border border-slate-200 p-3 bg-slate-50/50 rounded-lg">
                    <p className="font-bold uppercase text-slate-900 mb-1 font-sans">Consent Withdrawal</p>
                    <p className="text-slate-600 leading-relaxed">
                      You may withdraw processing consent at any time, which may result in termination of Services.
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm mt-2">
                  To exercise these rights, submit a written query to <a href="mailto:contact@inexarum.in" className="underline font-bold text-[#2a498c] font-sans">contact@inexarum.in</a>. The Company will address valid claims within thirty (30) days.
                </p>
              </section>

              {/* ARTICLE VIII */}
              <section
                id="article-8"
                ref={(el) => (articleRefs.current["article-8"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE VIII</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Minors & Vulnerable Subjects</h3>
                </div>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not intentionally compile information from minors. If the Company discovers a minor under 18 has furnished personal data, we will immediately purge the record from our systems.
                </p>
              </section>

              {/* ARTICLE IX */}
              <section
                id="article-9"
                ref={(el) => (articleRefs.current["article-9"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE IX</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Execution & Grievance Redressal</h3>
                </div>
                <p>
                  In accordance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, queries or complaints regarding this Data Charter shall be directed to the Grievance Redressal Officer:
                </p>
                
                <div className="border border-slate-200 p-5 bg-slate-50/50 rounded-xl space-y-2 text-xs font-sans">
                  <p><strong>GRIEVANCE OFFICER:</strong> Compliance & Legal Department</p>
                  <p><strong>EMAIL:</strong> <a href="mailto:contact@inexarum.in" className="text-[#2a498c] hover:underline font-bold">contact@inexarum.in</a></p>
                  <p><strong>TELEPHONE:</strong> +91 92860 70075</p>
                  <p><strong>REGISTERED OFFICE:</strong> iNexarum Private Limited, Meerut, Uttar Pradesh, 250001, India</p>
                </div>
              </section>

              {/* SIGNATURE / ATTESTATION BLOCK */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="text-center mb-6">
                  <p className="text-[10px] uppercase tracking-widest font-mono text-slate-400">Execution & Attestation</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs leading-relaxed font-sans text-slate-600">
                  <div className="space-y-2">
                    <p className="font-bold uppercase text-slate-900">CORPORATE ATTESTATION:</p>
                    <p>
                      iNexarum Private Limited has caused this Data Charter to be executed by its authorized Compliance Officer, verifying the adoption of this policy by resolution of the Board.
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-end text-right space-y-1">
                    <div className="w-48 border-b border-slate-350 mb-2"></div>
                    <p className="font-bold text-slate-900">Legal Counsel & Compliance</p>
                    <p className="text-slate-400 font-mono text-[10px]">For iNexarum Private Limited</p>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
