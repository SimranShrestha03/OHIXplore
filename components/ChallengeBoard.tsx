"use client";

import { useEffect, useState } from "react";
import type { PublicChallenge } from "@/challenges/types";
import Markdownish from "./Markdownish";

type Result = { status: string; message: string } | null;
const STORE = "ohix-solved";

export default function ChallengeBoard({ challenges }: { challenges: PublicChallenge[] }) {
  const [open, setOpen] = useState<PublicChallenge | null>(null);
  const [solved, setSolved] = useState<string[]>([]);
  const [flag, setFlag] = useState("");
  const [result, setResult] = useState<Result>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    try {
      setSolved(JSON.parse(localStorage.getItem(STORE) || "[]"));
    } catch {}
    const fromHash = () => {
      const slug = location.hash.slice(1);
      setOpen(challenges.find((c) => c.slug === slug) ?? null);
      setFlag("");
      setResult(null);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [challenges]);

  const close = () => {
    history.pushState(null, "", location.pathname);
    setOpen(null);
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!open || !flag.trim()) return;
    setBusy(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: open.slug, flag }),
      });
      const data = await res.json();
      setResult(data);
      if (data.status === "correct" && !solved.includes(open.slug)) {
        const next = [...solved, open.slug];
        setSolved(next);
        try { localStorage.setItem(STORE, JSON.stringify(next)); } catch {}
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="grid">
        {challenges.map((c) => (
          <a
            key={c.slug}
            href={`#${c.slug}`}
            className={`tile${solved.includes(c.slug) ? " solved" : ""}`}
          >
            <span>{c.title}</span>
          </a>
        ))}
      </div>

      {open && (
        <div className="modal-backdrop" onClick={close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={close} aria-label="Close">×</button>
            <div className="modal-tabs"><span className="tab active">Challenge</span></div>
            <h2>{open.title}</h2>
            <h3>{open.points}</h3>
            <div className="desc"><Markdownish text={open.description} /></div>

            {open.files && open.files.length > 0 && (
              <div className="files">
                {open.files.map((f) => (
                  <a key={f.path} href={f.path} download className="file">📎 {f.name}</a>
                ))}
              </div>
            )}

            {open.hints?.map((h, i) => (
              <details key={i} className="hint"><summary>Hint {i + 1}</summary>{h}</details>
            ))}

            <form onSubmit={submit} className="flag-form">
              <input
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                placeholder="Flag"
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit" disabled={busy}>Submit</button>
            </form>
            {result && (
              <div className={`result ${result.status}`}>{result.message}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
