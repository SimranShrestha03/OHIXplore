"use client";

import Link from "next/link";
import { useState } from "react";

export default function EnterChallenges() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>Enter Challenges</button>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal brief-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <h2>MISSION BRIEF</h2>
            <p className="brief-sub">Cadet, your assistance is required.</p>

            <div className="brief-body">
              <p>
                The Distortion Network (DN) is spreading online health
                misinformation as part of a malicious campaign called the <em>Distortion Protocol</em>.
              </p>
              <p>
                You are Agent VERITY, recruited by the Global Health Intelligence
                Agency (GHIA) as the last line of defense against health misinformation.
              </p>
              <p>
                Each challenge is a real-world scenario. Analyze the
                evidence, trace claims to their source, spot the manipulation, and extract the flag.
              </p>
              <p>
                Observe carefully, look out for the distortions, unearth
                the truth and stay aware.
              </p>
            </div>

            <div className="brief-actions">
              <Link href="/challenges" className="btn">Accept Mission</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
