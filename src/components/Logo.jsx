export function Logo({ className = "" }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__mark">&lt;/&gt;</span>
      <span className="logo__word">
        zarubin<span className="logo__dot">.dev</span>
      </span>
    </span>
  );
}
