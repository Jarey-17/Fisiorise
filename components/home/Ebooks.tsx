import { EBOOKS_DATA, FEATURES } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import ComingSoon from "@/components/ui/ComingSoon";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { staggerDelay } from "@/lib/reveal";

export default function Ebooks() {
  return (
    <section id={EBOOKS_DATA.id} className="ebooks">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            {EBOOKS_DATA.title}
            <span className="text-primary">{EBOOKS_DATA.titleHighlight}</span>
          </h2>
          <p className="section-desc">{EBOOKS_DATA.description}</p>
        </Reveal>

        {FEATURES.ebooks ? <EbookGrid /> : (
          <Reveal>
            <ComingSoon {...EBOOKS_DATA.comingSoon} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

function EbookGrid() {
  return (
    <div className="ebooks__grid">
      {EBOOKS_DATA.list.map((ebook, index) => {
        const isFree = ebook.price === 0;
        const coverClass =
          ebook.cover === "default" ? "" : ` ebook-card__cover--${ebook.cover}`;

        return (
          <Reveal
            key={ebook.title}
            className="ebook-card"
            delay={staggerDelay(index)}
          >
            <div className={`ebook-card__cover${coverClass}`}>
              <Icon
                name={ebook.icon}
                className="ebook-card__cover-icon"
                strokeWidth={1.5}
              />
              {ebook.badge && (
                <span className="ebook-card__badge">{ebook.badge}</span>
              )}
            </div>
            <div className="ebook-card__body">
              <h3 className="ebook-card__title">{ebook.title}</h3>
              <p className="ebook-card__desc">{ebook.description}</p>
              <div className="ebook-card__footer">
                <span
                  className={`ebook-card__price${isFree ? " ebook-card__price--free" : ""}`}
                >
                  {isFree ? "Gratis" : `C$ ${ebook.price}`}
                </span>
                <AppLink
                  href={ebook.cta.href}
                  className={`btn btn--${ebook.cta.variant} btn--sm`}
                >
                  {ebook.cta.label}
                </AppLink>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
