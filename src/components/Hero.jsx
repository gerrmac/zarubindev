import { roles, stats } from "../data/content.generated";
import { useTypewriter } from "../hooks/useTypewriter";
import { CodeCard } from "./CodeCard";
import { Icon } from "./Icon";

export function Hero() {
  const typed = useTypewriter(roles);

  const dash = typed.indexOf("-");
  const role =
    dash === -1 ? (
      typed
    ) : (
      <>
        {typed.slice(0, dash + 1)}
        <br />
        {typed.slice(dash + 1)}
      </>
    );

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__col">
          <span className="eyebrow reveal">
            Fullstack Developer
            <span className="eyebrow__sep">· доступен для проектов</span>
          </span>

          <h1 className="hero__title reveal" style={{ "--reveal-delay": "60ms" }}>
            Привет, я
            <span className="hero__role">
              <span className="hero__accent">{role}</span>
              <span className="hero__caret" />
            </span>
          </h1>

          <p className="hero__lead reveal" style={{ "--reveal-delay": "140ms" }}>
            Проектирую и разрабатываю веб-приложения целиком — от продуманного интерфейса до
            надёжного сервера и базы данных.
          </p>

          <div className="hero__actions reveal" style={{ "--reveal-delay": "220ms" }}>
            <a href="#projects" className="btn btn--primary">
              Смотреть проекты
              <Icon name="arrowUpRight" size={18} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Связаться со мной
            </a>
          </div>

          <dl className="hero__stats reveal" style={{ "--reveal-delay": "300ms" }}>
            {stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__col hero__col--code reveal" style={{ "--reveal-delay": "180ms" }}>
          <CodeCard />
        </div>
      </div>
    </section>
  );
}
