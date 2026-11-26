import { DOWNLOADS_DATA } from "@/constants";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { staggerDelay } from "@/lib/reveal";

/** Espacio de descargas. No se muestra si no hay documentos publicados. */
export default function Downloads() {
  if (DOWNLOADS_DATA.list.length === 0) return null;

  return (
    <section id={DOWNLOADS_DATA.id} className="downloads">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            {DOWNLOADS_DATA.title}
            <span className="text-primary">{DOWNLOADS_DATA.titleHighlight}</span>
          </h2>
          <p className="section-desc">{DOWNLOADS_DATA.description}</p>
        </Reveal>

        <div className="downloads__grid">
          {DOWNLOADS_DATA.list.map((item, index) => (
            <Reveal
              key={item.file}
              className="download-card"
              delay={staggerDelay(index)}
            >
              <div className="download-card__icon">
                <Icon name="document" className="icon icon--primary" />
              </div>
              <h3 className="download-card__title">{item.title}</h3>
              <p className="download-card__desc">{item.description}</p>
              <div className="download-card__footer">
                <span className="download-card__meta">
                  PDF{item.size && ` · ${item.size}`}
                </span>
                <a
                  href={item.file}
                  download
                  className="btn btn--primary btn--sm download-card__btn"
                  aria-label={`${DOWNLOADS_DATA.buttonLabel}: ${item.title}`}
                >
                  <Icon name="download" size={16} />
                  {DOWNLOADS_DATA.buttonLabel}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
