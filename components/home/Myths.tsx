import { MYTHS_DATA } from "@/constants";
import Reveal from "@/components/ui/Reveal";
import { staggerDelay } from "@/lib/reveal";

/** Mitos frente a evidencia (selección de la guía). */
export default function Myths() {
  return (
    <section id={MYTHS_DATA.id} className="myths">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            {MYTHS_DATA.title}
            <span className="text-primary">{MYTHS_DATA.titleHighlight}</span>
          </h2>
          <p className="section-desc">{MYTHS_DATA.description}</p>
        </Reveal>

        <div className="myths__grid">
          {MYTHS_DATA.list.map((myth, index) => (
            <Reveal
              key={myth.belief}
              className="myth-card"
              delay={staggerDelay(index % 3)}
            >
              <span className={`myth-card__verdict myth-card__verdict--${myth.verdict}`}>
                {MYTHS_DATA.verdictLabels[myth.verdict]}
              </span>
              <h3 className="myth-card__belief">«{myth.belief}»</h3>
              <p className="myth-card__evidence">{myth.evidence}</p>
            </Reveal>
          ))}
        </div>

        <p className="myths__note">{MYTHS_DATA.note}</p>
      </div>
    </section>
  );
}
