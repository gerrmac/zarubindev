import { skillGroups } from "../data/content.generated";

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow reveal">Навыки</span>
            <h2 className="section-title reveal" style={{ "--reveal-delay": "60ms" }}>
              Технологии, с которыми работаю
            </h2>
          </div>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div
              className="skillcard reveal"
              key={group.label}
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              <div className="skillcard__head">
                <span className="skillcard__num">0{i + 1}</span>
                <h3 className="skillcard__label">{group.label}</h3>
              </div>
              <ul className="skillcard__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
