import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__logo" aria-label="zarubin.dev — наверх">
          <Logo />
        </a>
        <p className="footer__copy">© {new Date().getFullYear()} · Сделано с любовью к деталям</p>
        <a href="#top" className="footer__top">
          Наверх
          <Icon name="arrowUp" size={16} />
        </a>
      </div>
    </footer>
  );
}
