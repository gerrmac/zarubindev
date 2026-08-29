function Shop() {
  return (
    <div className="thumb thumb--shop">
      <div className="thumb__win">
        <span className="thumb__win-title">Магазин</span>
        <span className="thumb__cart" />
      </div>
      <div className="thumb__shop-hero">
        <div className="thumb__shop-copy">
          <span className="l l--lg" />
          <span className="l l--md" />
          <span className="thumb__pill" />
        </div>
        <div className="thumb__orb" />
      </div>
      <div className="thumb__cards">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="thumb thumb--analytics">
      <div className="thumb__side">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="thumb__main">
        <div className="thumb__kpis">
          <span />
          <span />
          <span />
        </div>
        <svg className="thumb__chart" viewBox="0 0 220 90" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgba(245,158,11,0.55)" />
              <stop offset="1" stopColor="rgba(245,158,11,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 L30 55 L60 62 L90 38 L120 46 L150 22 L180 33 L220 12 L220 90 L0 90 Z"
            fill="url(#pg)"
          />
          <path
            d="M0 70 L30 55 L60 62 L90 38 L120 46 L150 22 L180 33 L220 12"
            fill="none"
            stroke="#fb923c"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="thumb thumb--tasks">
      <div className="thumb__win">
        <span className="thumb__win-title">Задачи</span>
      </div>
      <div className="thumb__cols">
        {[3, 2, 2].map((n, c) => (
          <div className="thumb__col" key={c}>
            <span className="thumb__col-head" />
            {Array.from({ length: n }).map((_, k) => (
              <span className="thumb__task" key={k}>
                <i /> <em />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectThumb({ kind }) {
  if (kind === "analytics") return <Analytics />;
  if (kind === "tasks") return <Tasks />;
  return <Shop />;
}
