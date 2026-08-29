import { about, features } from "../data/content.generated";
import { Icon } from "./Icon";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__intro">
          <span className="eyebrow reveal">{about.eyebrow}</span>
          <h2 className="section-title reveal" style={{ "--reveal-delay": "60ms" }}>
            {about.title}
          </h2>
          {about.text.map((paragraph, i) => (
            <p
              className="about__text reveal"
              key={i}
              style={{ "--reveal-delay": `${120 + i * 60}ms` }}
            >
              {paragraph}
            </p>
          ))}
          <a
            href={about.link.href}
            className="link-more reveal"
            style={{ "--reveal-delay": "240ms" }}
          >
            {about.link.label}
            {about.link.icon && <Icon name={about.link.icon} size={17} />}
          </a>
        </div>

        <ul className="about__features">
          {features.map((f, i) => (
            <li
              className="feature reveal"
              key={f.title}
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              <span className="feature__icon">
                <Icon name={f.icon} size={22} />
              </span>
              <div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__text">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
