import React, { useEffect, useState, useRef } from "react";
import SEOHead from "../components/SEOHead";

const ARTICLES = [
  { id: "article-1", num: "ARTICLE I", label: "Agreement to Terms & Definitions" },
  { id: "article-2", num: "ARTICLE II", label: "Services & Retainer Engagements" },
  { id: "article-3", num: "ARTICLE III", label: "User Access & System Credentials" },
  { id: "article-4", num: "ARTICLE IV", label: "Payments, Retainers & Tax Levies" },
  { id: "article-5", num: "ARTICLE V", label: "Acceptable Use & Network Integrity" },
  { id: "article-6", num: "ARTICLE VI", label: "Intellectual Property Covenants" },
  { id: "article-7", num: "ARTICLE VII", label: "Warranties & Liability Limits" },
  { id: "article-8", num: "ARTICLE VIII", label: "Governing Law & Disputes" },
  { id: "article-9", num: "ARTICLE IX", label: "Miscellaneous Provisions" },
];

const Terms = () => {
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
        title="Terms of Service"
        description="Terms of Service and General Conditions of iNexarum Private Limited. Formatted as an official legal instrument governing corporate web, app, and consulting services."
        keywords="terms of service, legal contract, iNexarum terms, software development contract, India governance"
        path="/terms"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inexarum.in/" },
            { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://inexarum.in/terms" }
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
                Corporate Instrument • Ref: IX-TERMS-2026-V2
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
                Terms of Service
              </h1>
              <p className="text-sm font-medium italic text-slate-500">
                Adopted by the Board of Directors of iNexarum Private Limited
              </p>
              <div className="text-[11px] font-mono text-[#2a498c] font-semibold mt-2">
                EFFECTIVE DATE: 21 JULY 2026
              </div>
            </div>

            <div className="relative z-10 space-y-12 text-justify leading-relaxed font-serif text-sm sm:text-base text-slate-900">
              
              {/* Preface / Preamble */}
              <div className="italic border-l-4 border-[#2a498c] pl-4 py-1 text-slate-600 text-xs sm:text-sm font-sans">
                <strong>PREAMBLE:</strong> These Terms of Service constitute a legally binding contract governing the acquisition, licensing, and usage of technical services, portals, and products supplied by iNexarum Private Limited.
              </div>

              {/* ARTICLE I */}
              <section
                id="article-1"
                ref={(el) => (articleRefs.current["article-1"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE I</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Agreement to Terms & Definitions</h3>
                </div>
                <p>
                  <strong>Section 1.01. Binding Covenants.</strong> This Contract is entered into by and between the individual or legal entity executing this instrument (hereinafter referred to as the “Client,” “User,” or “you”) and <strong>iNexarum Private Limited</strong> (hereinafter referred to as the “Company,” “we,” “us,” or “our”), a DPIIT recognized digital agency incorporated in India.
                </p>
                <p>
                  <strong>Section 1.02. Definition of Services.</strong> The terms “Services” and “Offerings” as used herein shall encompass all public sites, including <a href="https://inexarum.in" className="text-slate-950 underline font-semibold text-[#2a498c] font-sans">inexarum.in</a>, corporate directories, Client portals, source repositories, custom engineering solutions, database architectures, and associated digital products hosted or delivered by the Company.
                </p>
                <p>
                  <strong>Section 1.03. Declarations of Age.</strong> By registering profiles or purchasing deliverables, you affirm that you are at least eighteen (18) years of age, or have reached the legal age of majority in your jurisdiction, and have full authority to execute contracts.
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
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Services & Retainer Engagements</h3>
                </div>
                <p>
                  <strong>Section 2.01. Custom Software Deliverables.</strong> Custom web engineering, mobile application construction, database implementations, and systems integration services are subject to Statement of Work (SOW) documents and Master Services Agreements (MSA) executed individually. The terms of such MSAs/SOWs shall supersede this general Contract in the event of an explicit conflict.
                </p>
                <p>
                  <strong>Section 2.02. Client Portal Access.</strong> The Company grants to the Client a limited, non-exclusive, non-transferable, revocable license to access our shared environments, directories, and management dashboards solely during the term of active project engagements or paid retainer agreements.
                </p>
              </section>

              {/* ARTICLE III */}
              <section
                id="article-3"
                ref={(el) => (articleRefs.current["article-3"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE III</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">User Access & System Credentials</h3>
                </div>
                <p>
                  <strong>Section 3.01. Security of Credentials.</strong> The User assumes full responsibility for maintaining the confidentiality of logins, access keys, database credentials, and session tokens issued by the Company.
                </p>
                <p>
                  <strong>Section 3.02. Notice of Compromise.</strong> You covenant to immediately notify our security desk at <a href="mailto:contact@inexarum.in" className="underline font-bold text-[#2a498c] font-sans">contact@inexarum.in</a> upon detecting unauthorized access to your account or any known credential leakage. The Company shall not be liable for losses caused by client negligence.
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
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Payments, Retainers & Tax Levies</h3>
                </div>
                <p>
                  <strong>Section 4.01. Invoicing & Schedules.</strong> Payments for digital development are billed in accordance with the milestone schedules outlined in the project SOW. Recurring maintenance retainers are invoiced periodically and processed through our designated billing gateways.
                </p>
                <p>
                  <strong>Section 4.02. Statutory Indian GST.</strong> All billing records issued to Indian residents or corporations are subject to Indian Goods and Services Tax (GST) at statutory rates. Clients are required to register valid GSTIN details at onboarding to claim tax credits.
                </p>
                <p>
                  <strong>Section 4.03. Refund Covenants.</strong> Due to the allocation of human engineering hours and custom designs, payments for completed milestones and initial project deposits are non-refundable. Cancellations of retainers require written notice in compliance with MSA parameters.
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
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Acceptable Use & Network Integrity</h3>
                </div>
                <p>
                  Users and Clients covenant to refrain from the following prohibited activities:
                </p>
                <ul className="list-decimal pl-6 space-y-2 text-xs sm:text-sm">
                  <li>Attempting to decompile, reverse-engineer, or clone the company's portal code, server structures, or proprietary software frameworks.</li>
                  <li>Using company servers or client-facing environments to distribute malware, host illegal documents, or dispatch spam operations.</li>
                  <li>Bypassing system access barriers, carrying out DDoS maneuvers, or exceeding authorized API requests.</li>
                  <li>Engaging in automated scraping, crawling, or extracting of data from the Site without explicit written authorization.</li>
                  <li>Using Company systems in violation of the Information Technology Act, 2000, or other cybersecurity statutes in India.</li>
                </ul>
              </section>

              {/* ARTICLE VI */}
              <section
                id="article-6"
                ref={(el) => (articleRefs.current["article-6"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE VI</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Intellectual Property Covenants</h3>
                </div>
                <p>
                  <strong>Section 6.01. Proprietary Assets.</strong> Our Site, management portals, assets, logos, design templates, underlying codebase libraries, and algorithms are the exclusive property of iNexarum Private Limited and are protected by Indian and international copyright and trademark laws.
                </p>
                <p>
                  <strong>Section 6.02. Transfer of Custom IP.</strong> Intellectual property ownership of specific custom software deliverables, source repositories, and design items crafted uniquely for a Client transfers to the Client *only upon full and final settlement of all invoiced milestones*, subject to any base software or open-source licenses explicitly retained by the Company.
                </p>
              </section>

              {/* ARTICLE VII */}
              <section
                id="article-7"
                ref={(el) => (articleRefs.current["article-7"] = el)}
                className="space-y-4 scroll-mt-24"
              >
                <div className="text-center pb-2 border-b-2 border-slate-100 font-sans">
                  <h2 className="font-bold text-md tracking-wider text-[#2a498c]">ARTICLE VII</h2>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Warranties & Liability Limits</h3>
                </div>
                <p>
                  <strong>Section 7.01. Warranty Disclaimer.</strong> The Company's Services and dashboards are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied.
                </p>
                <p>
                  <strong>Section 7.02. Liability Limits.</strong> iNexarum shall not be liable for indirect, incidental, special, or consequential damages, including loss of profits, revenue, or databases, arising from server downtime or system unavailability. To the maximum extent permitted by Indian law, our total liability is limited to the amount paid to us in the six (6) months preceding the claim.
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
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Governing Law & Disputes</h3>
                </div>
                <p>
                  <strong>Section 8.01. Governing Law.</strong> This Contract and all disputes arising hereunder shall be interpreted and governed by the laws of the **Republic of India**.
                </p>
                <p>
                  <strong>Section 8.02. Dispute Resolution & Arbitration.</strong> Any controversy or claim arising out of these Terms shall first be negotiated in good faith. If unresolved, the dispute shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Meerut, Uttar Pradesh, India, and the language shall be English.
                </p>
                <p>
                  <strong>Section 8.03. Jurisdiction.</strong> Subject to the arbitration clause, the parties submit to the exclusive jurisdiction of the courts located in **Meerut, Uttar Pradesh, India** to resolve any legal matters.
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
                  <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Miscellaneous Provisions</h3>
                </div>
                <p>
                  <strong>Section 9.01. Severability.</strong> If any provision of this Contract is found invalid by a court of competent jurisdiction, the remaining terms shall continue in full force and effect.
                </p>
                <p>
                  <strong>Section 9.02. Amendments.</strong> The Company reserves the right to amend this Contract at any time. Changes will be posted to this page, and your continued use of our Services constitutes acceptance of the updated terms.
                </p>
              </section>

              {/* SIGNATURE / ATTESTATION BLOCK */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="text-center mb-6">
                  <p className="text-[10px] uppercase tracking-widest font-mono text-slate-400">Execution & Attestation</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs leading-relaxed font-sans text-slate-650">
                  <div className="space-y-2">
                    <p className="font-bold uppercase text-slate-900">CORPORATE ATTESTATION:</p>
                    <p>
                      iNexarum Private Limited has caused these Terms of Service to be approved and published by its authorized Compliance Officer, verifying the adoption of this policy by resolution of the Board.
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

export default Terms;
