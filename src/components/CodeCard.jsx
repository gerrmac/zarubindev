import { codeFile, codeLines } from "../data/content.generated";

const cls = {
  key: "tok-key",
  str: "tok-str",
  prop: "tok-prop",
  punc: "tok-punc",
  bool: "tok-bool",
};

export function CodeCard() {
  return (
    <div className="codecard" aria-hidden="true">
      <div className="codecard__glow" />
      <div className="codecard__bar">
        <span className="codecard__dots">
          <i style={{ background: "#ff5f57" }} />
          <i style={{ background: "#febc2e" }} />
          <i style={{ background: "#28c840" }} />
        </span>
        <span className="codecard__file">{codeFile}</span>
      </div>

      <pre className="codecard__code">
        <code>
          {codeLines.map((line, i) => (
            <span className="codecard__line" key={i}>
              <span className="codecard__ln">{i + 1}</span>
              <span className="codecard__content">
                {line.tokens.map((tok, j) => (
                  <span className={cls[tok.c] || ""} key={j}>
                    {tok.t}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
