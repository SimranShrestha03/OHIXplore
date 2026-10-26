import Link from "next/link";

export default function Home() {
  return (
    <main className="landing">
      <h1>WELCOME TO THE OHI XPLORE CTF</h1>
      <p className="sub">Online Health Information Exploration Challenges</p>
      <p className="lead">
        Train your problem-solving skills, explore OHI topics, including misinfo concepts, and work on
        hands-on challenges designed to help you learn by doing.
      </p>
      <Link href="/challenges" className="btn">Enter Challenges</Link>

      <section className="brief">
        <h2>MISSION BRIEF</h2>
        <p className="brief-sub">Cadet, your assistance is required.</p>
        <p>
          Our communication channels have detected a series of OHI related misinformation spreading
          attempts as part of a malicious campaign - the Distortion Protocol. We need capable agents to
          investigate, identify the misinformation plus fake claims, which are being circulated, and
          discover the truth among the false propaganda before further damage is done. Each challenge
          represents a real-world scenario. Analyze the evidence, adapt your approach, and extract the
          flag. Your mission is simple: observe carefully, look out for the distortions, that is the
          disformed information components, look for noise patterns, unearth the truth and stay aware.
        </p>
        <p className="brief-foot">Start in the <b>Enter Challenges</b> tab/button option.</p>
      </section>
    </main>
  );
}
