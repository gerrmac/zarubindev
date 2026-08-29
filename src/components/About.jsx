import { features } from "../data/content.generated";
import { Icon } from "./Icon";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__intro">
          <span className="eyebrow reveal">Обо мне</span>
          <h2 className="section-title reveal" style={{ "--reveal-delay": "60ms" }}>
            Дизайн, код и внимание&nbsp;к&nbsp;деталям
          </h2>
          <p className="about__text reveal" style={{ "--reveal-delay": "120ms" }}>
            Я fullstack-разработчик и веду продукт от идеи до продакшена: собираю аккуратный
            интерфейс на фронтенде и надёжную логику, API и базу данных на бэкенде.
          </p>
          <p className="about__text reveal" style={{ "--reveal-delay": "180ms" }}>
            На бэкенде — Node.js, Go и Rust, Telegram-боты на grammY и Telegraf.js, деплой через
            Docker и CI/CD. Разворачиваю локальные LLM на базе открытых моделей (llama.cpp, Ollama,
            vLLM) и собираю AI-агентов на n8n и других платформах.
          </p>
          <a href="#skills" className="link-more reveal" style={{ "--reveal-delay": "240ms" }}>
            Мои навыки
            <Icon name="arrowRight" size={17} />
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
