import { projects } from "../data/content.generated";
import { Icon } from "./Icon";
import { ProjectThumb } from "./ProjectThumb";

const statusMeta = {
  released: { label: "Выпущен", cls: "released" },
  development: { label: "В разработке", cls: "development" },
  abandoned: { label: "Заброшен", cls: "abandoned" },
  planned: { label: "В планах", cls: "planned" },
};

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow reveal">Проекты</span>
            <h2 className="section-title reveal" style={{ "--reveal-delay": "60ms" }}>
              Избранные работы
            </h2>
          </div>
          <a href="#contact" className="link-more reveal" style={{ "--reveal-delay": "120ms" }}>
            Смотреть все проекты
            <Icon name="arrowRight" size={17} />
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => {
            const status = p.status
              ? (statusMeta[p.status] ?? { label: p.status, cls: "neutral" })
              : null;
            return (
              <article
                className="project reveal"
                key={p.title}
                style={{ "--reveal-delay": `${i * 100}ms` }}
              >
                <a
                  className="project__media"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.title}
                >
                  {p.image ? (
                    <img
                      className="project__screenshot"
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                    />
                  ) : (
                    <ProjectThumb kind={p.accent} />
                  )}
                  {status && (
                    <span className={`project__badge project__badge--${status.cls}`}>
                      {status.label}
                    </span>
                  )}
                  <span className="project__open">
                    <Icon name="arrowUpRight" size={18} />
                  </span>
                </a>
                <div className="project__body">
                  <div className="project__head">
                    <a
                      className="project__title-link"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="project__title">{p.title}</h3>
                    </a>
                  </div>
                  <p className="project__text">{p.text}</p>
                  <ul className="project__tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {p.git && (
                    <a
                      className="project__github"
                      href={p.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
