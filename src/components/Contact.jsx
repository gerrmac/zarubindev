import { contacts } from "../data/content.generated";
import { Icon } from "./Icon";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__card reveal">
          <div className="contact__glow" />
          <div className="contact__inner">
            <div className="contact__lead">
              <span className="eyebrow">Контакты</span>
              <h2 className="section-title">
                Готов к новым проектам
                <br />и интересным задачам
              </h2>
              <p className="contact__text">
                Есть идея или вакансия? Напишите — обсудим, как я могу помочь вашему продукту.
              </p>
              <a href="mailto:germann-2005@yandex.ru" className="btn btn--primary">
                Написать письмо
                <Icon name="arrowUpRight" size={18} />
              </a>
            </div>

            <ul className="contact__list">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noreferrer">
                    <span className="contact__ic">
                      <Icon name={c.icon} size={19} />
                    </span>
                    <span className="contact__meta">
                      <em>{c.title}</em>
                      <b>{c.label}</b>
                    </span>
                    <Icon name="arrowUpRight" size={16} className="contact__arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
