"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { PublicChallenge } from "@/challenges/types";
import { clearSolved, readSolved } from "@/lib/progress";

export default function ResultsView({ challenges }: { challenges: PublicChallenge[] }) {
  const [solved, setSolved] = useState<string[] | null>(null);

  useEffect(() => setSolved(readSolved()), []);

  if (!solved) return null;

  const done = challenges.filter((c) => solved.includes(c.slug));
  const total = challenges.reduce((n, c) => n + c.points, 0);
  const score = done.reduce((n, c) => n + c.points, 0);
  const complete = done.length === challenges.length;

  return (
    <section className="results">
      <div className="results-summary">
        <div className="results-score">{score}<span> / {total}</span></div>
        <div className="results-label">points</div>
        <div className="results-bar"><div style={{ width: `${(done.length / challenges.length) * 100}%` }} /></div>
        <p>{done.length} of {challenges.length} challenges solved</p>
        {complete && (
          <p className="results-congrats">
            Mission complete, Agent VERITY! You exposed the Distortion Protocol. Stay aware. 🎉
          </p>
        )}
      </div>

      <ul className="results-list">
        {challenges.map((c) => {
          const ok = solved.includes(c.slug);
          return (
            <li key={c.slug} className={ok ? "ok" : ""}>
              <span className="results-mark">{ok ? "✓" : "○"}</span>
              <Link href={`/challenges#${c.slug}`}>{c.title}</Link>
              <span className="results-pts">{ok ? `+${c.points}` : "—"}</span>
            </li>
          );
        })}
      </ul>

      <div className="results-actions">
        <Link href="/challenges" className="btn">Back to Challenges</Link>
        <button
          className="reset-btn"
          onClick={() => {
            if (confirm("Reset your progress on this device?")) {
              clearSolved();
              setSolved([]);
            }
          }}
        >
          Reset progress
        </button>
      </div>
    </section>
  );
}
