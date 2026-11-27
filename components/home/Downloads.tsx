import Image from "next/image";
import { DOWNLOADS_DATA, type DownloadItem } from "@/constants";
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
          {DOWNLOADS_DATA.list.map((item: DownloadItem, index) => (
            <Reveal
              key={item.file}
              className={
                item.cover ? "download-card download-card--featured" : "download-card"
              }
              delay={staggerDelay(index)}
            >
              {item.cover ? (
                <a
                  href={item.file}
                  download
                  className="download-card__cover"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={item.cover.src}
                    alt=""
                    width={item.cover.width}
                    height={item.cover.height}
                    sizes="(min-width: 768px) 260px, 220px"
                  />
                </a>
              ) : (
                <div className="download-card__icon">
                  <Icon name="document" className="icon icon--primary" />
                </div>
              )}

              <div className="download-card__body">
                <span className="download-card__badge">
                  {DOWNLOADS_DATA.freeLabel}
                </span>
                <h3 className="download-card__title">{item.title}</h3>
                <p className="download-card__desc">{item.description}</p>
                {item.highlights && (
                  <ul className="download-card__highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Icon name="check" className="icon icon--primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="download-card__footer">
                  <span className="download-card__meta">
                    PDF{item.pages && ` · ${item.pages} páginas`}
                    {item.size && ` · ${item.size}`}
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
