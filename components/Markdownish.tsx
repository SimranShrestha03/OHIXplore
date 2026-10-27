import { Fragment, type ReactNode } from "react";

const TOKEN =
  /!\[([^\]]*)\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|(https?:\/\/[^\s)]+)/g;

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    const key = i++;
    if (m[2]) {
      // "![alt|420](url)" caps the image width at 420px.
      const [alt, w] = m[1].split("|");
      out.push(
        <a key={key} href={m[2]} target="_blank" rel="noreferrer" title="Open full size">
          <img
            src={m[2]}
            alt={alt}
            className="md-img"
            style={w ? { maxWidth: `${w}px`, maxHeight: "none" } : undefined}
          />
        </a>,
      );
    }
    else if (m[4]) out.push(<a key={key} href={m[4]} target="_blank" rel="noreferrer">{m[3]}</a>);
    else if (m[5]) out.push(<strong key={key}>{m[5]}</strong>);
    else if (m[6]) out.push(<em key={key}>{m[6]}</em>);
    else out.push(<a key={key} href={m[7]} target="_blank" rel="noreferrer">{m[7]}</a>);
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Markdownish({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((para, i) => {
        const lines = para.split("\n");
        // A paragraph made only of images (one per line) renders side by side.
        if (lines.length > 1 && lines.every((l) => /^!\[[^\]]*\]\([^)]+\)$/.test(l.trim()))) {
          return <div key={i} className="md-gallery">{lines.map((l, j) => <Fragment key={j}>{inline(l.trim())}</Fragment>)}</div>;
        }
        return (
        <p key={i}>
          {para.split("\n").map((line, j) => (
            <Fragment key={j}>
              {j > 0 && <br />}
              {inline(line)}
            </Fragment>
          ))}
        </p>
        );
      })}
    </>
  );
}
