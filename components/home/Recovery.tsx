import { RECOVERY_DATA } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { staggerDelay } from "@/lib/reveal";

/** Las fases de la recuperación de una fractura (extracto de la guía). */
export default function Recovery() {
  return (
    <section id={RECOVERY_DATA.id} className="recovery">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            {RECOVERY_DATA.title}
            <span className="text-primary">{RECOVERY_DATA.titleHighlight}</span>
          </h2>
          <p className="section-desc">{RECOVERY_DATA.description}</p>
        </Reveal>

        <ol className="recovery__grid">
          {RECOVERY_DATA.phases.map((phase, index) => (
            <li key={phase.phase} className="recovery__item">
              <Reveal className="phase-card" delay={staggerDelay(index % 3)}>
                <div className="phase-card__head">
                  <span className="phase-card__phase">{phase.phase}</span>
                  <span className="phase-card__time">{phase.time}</span>
                </div>
                <h3 className="phase-card__name">{phase.name}</h3>
                <dl className="phase-card__details">
                  <dt>{RECOVERY_DATA.workLabel}</dt>
                  <dd>{phase.work}</dd>
                  <dt>{RECOVERY_DATA.nextLabel}</dt>
                  <dd>{phase.next}</dd>
                </dl>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="recovery__note">
          <Icon name="clock" className="icon icon--primary" />
          <p>{RECOVERY_DATA.note}</p>
        </Reveal>

        <div className="recovery__extras">
          <Reveal className="recovery__pillars">
            <h3 className="recovery__subtitle">{RECOVERY_DATA.pillarsTitle}</h3>
            <ol className="recovery__pillar-list">
              {RECOVERY_DATA.pillars.map((pillar, index) => (
                <li key={pillar} className="recovery__pillar">
                  <span className="recovery__pillar-num">{index + 1}</span>
                  {pillar}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="recovery__rule" delay={1}>
            <h3 className="recovery__rule-title">
              {RECOVERY_DATA.goldenRule.title}
            </h3>
            <p className="recovery__rule-text">{RECOVERY_DATA.goldenRule.text}</p>
            <AppLink
              href={RECOVERY_DATA.cta.href}
              className="btn btn--primary btn--sm recovery__cta"
            >
              <Icon name="download" size={16} />
              {RECOVERY_DATA.cta.label}
            </AppLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
