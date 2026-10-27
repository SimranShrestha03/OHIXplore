import { challenges, toPublic } from "@/challenges";
import ResultsView from "@/components/ResultsView";

export const metadata = { title: "Results · OHI Xplore" };

export default function ResultsPage() {
  return (
    <main className="challenges-page">
      <header className="challenges-hero"><h1>Results</h1></header>
      <ResultsView challenges={challenges.map(toPublic)} />
    </main>
  );
}
