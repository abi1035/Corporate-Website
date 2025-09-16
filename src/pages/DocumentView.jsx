// File: src/pages/DocumentView.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Map slugs -> PDF file + title (served from /public)
const DOCS = {
  "privacy-policy": {
    title: "Privacy Policy",
    src: "/pdfs/Primacare Privacy Policy.pdf",
  },
  "accessibility-policy": {
    title: "Accessibility Policy",
    src: "/pdfs/accessibility-policy.pdf",
  },
  "multi-year-accessibility-plan": {
    title: "Multi-Year Accessibility Plan",
    src: "/pdfs/multi-year-accessibility-plan.pdf",
  },
  "aoda-accessibility-feedback-process": {
    title: "AODA Accessibility Feedback Process",
    src: "/pdfs/aoda-accessibility-feedback-process.pdf",
  },
  "aoda-customer-service-feedback": {
    title: "AODA Customer Service Feedback",
    src: "/pdfs/aoda-customer-service-feedback.pdf",
  },
  "visitor-policy": {
    title: "Visitor Policy",
    src: "/pdfs/visitor-policy.pdf",
  },
  "covid-19-testing-policy": {
    title: "COVID-19 Testing Policy",
    src: "/pdfs/covid-19-testing-policy.pdf",
  },
  "passive-screening": {
    title: "Passive Screening",
    src: "/pdfs/passive-screening.pdf",
  },
  "emp-burton": {
    title: "Emergency Management Plan — Burton Manor",
    src: "/pdfs/emp-burton.pdf",
  },
  "emp-henley-house": {
    title: "Emergency Management Plan — Henley House",
    src: "/pdfs/emp-henley-house.pdf",
  },
  "emp-henley-place": {
    title: "Emergency Management Plan — Henley Place",
    src: "/pdfs/emp-henley-place.pdf",
  },

//--------------------------------------------------------------------------- Burton Manor -----------------------------------------------------------
  "cqiReportsBurton": {
    title: "Continous Quality Reports - Burton",
    src: "/pdfs/Burton Manor CQI Report Jul 2025.pdf",
  },
  
  "narrativeBurton": {
    title: "Narrative - Burton",
    src: "/pdfs/Narrative for Burton Manor 2025-2026.pdf",
  },
  
  "workplanBurton": {
    title: "Workplan - Burton",
    src: "/pdfs/Workplan Burton Manor 2025-2026.pdf",
  },

  "progressBurton": {
    title: "Progress Report - Burton",
    src: "/pdfs/Progress Report for Burton Manor 2025-2026.pdf",
  },
  

};

export default function DocumentView() {
  const { id } = useParams();
  const doc = DOCS[id];

  if (!doc) {
    return (
      <div style={{ padding: "24px 24px 64px", background: "#fafbfc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "#0b6bcb", fontWeight: 600 }}>
            ← Back
          </Link>
          <h2 style={{ marginTop: 12 }}>Document not found</h2>
          <p>The document you requested doesn’t exist.</p>
        </div>
      </div>
    );
  }

  // Use the browser's native PDF viewer
  const viewerSrc = `${doc.src}#view=FitH`; // Fit to width; you can add &page=1, &toolbar=0 (some browsers ignore)

  return (
    <div style={{ padding: "24px 24px 64px", background: "#fafbfc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top bar: back link + title + actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <div>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#0b6bcb", fontWeight: 600 }}
            >
              ← Back
            </Link>
            <h1
              style={{
                margin: "8px 0 0",
                fontSize: 32,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              {doc.title}
            </h1>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <a
              href={doc.src}
              target="_blank"
              rel="noreferrer"
              style={btn("ghost")}
              title="Open in new tab"
            >
              Open in new tab
            </a>
            <a href={doc.src} download style={btn("primary")}>
              Download PDF
            </a>
          </div>
        </div>

        {/* Viewer card */}
        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.08)",
          }}
        >
          {/* Subtle header strip */}
          <div
            style={{
              height: 6,
              background: "linear-gradient(90deg, #0ea5e9, #22c55e, #fb9127ff)",
            }}
          />
          <div
            style={{
              height: "calc(100vh - 220px)", // responsive height under your top nav
              minHeight: 520,
              background: "#fff",
            }}
          >
            <iframe
              title={doc.title}
              src={viewerSrc}
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            />
          </div>
        </div>

        {/* Footer hint */}
        <p
          style={{
            marginTop: 12,
            color: "#6b7280",
            fontSize: 12,
            textAlign: "right",
          }}
        >
          Having trouble viewing? Click “Open in new tab”.
        </p>
      </div>
    </div>
  );
}

/* --- small button style helper --- */
function btn(variant) {
  if (variant === "primary") {
    return {
      display: "inline-block",
      padding: "10px 14px",
      background: "#0b6bcb",
      color: "#fff",
      borderRadius: 8,
      textDecoration: "none",
      fontWeight: 700,
      boxShadow: "0 8px 16px rgba(11,107,203,.15)",
    };
  }
  // ghost
  return {
    display: "inline-block",
    padding: "10px 14px",
    background: "transparent",
    color: "#0b6bcb",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #cfe3fb",
  };
}
