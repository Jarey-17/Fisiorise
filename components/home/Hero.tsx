import Image from "next/image";
import { HERO_DATA } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

// Ancho renderizado de la foto: máx. 28rem (448px) y 584px en desktop (2 columnas).
const IMAGE_SIZES = "(min-width: 1024px) 584px, 448px";

export default function Hero() {
  const { image, hoverImage, stats } = HERO_DATA;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <Reveal className="hero__text">
            <span className="hero__badge">{HERO_DATA.badge}</span>
            <h1 className="hero__title">
              {HERO_DATA.titlePrimary}
              <span className="text-primary">{HERO_DATA.titleHighlight}</span>
              {HERO_DATA.titleSecondary}
            </h1>
            <p className="hero__desc">{HERO_DATA.description}</p>
            <div className="hero__actions">
              <AppLink
                href={HERO_DATA.ctaPrimary.href}
                className="btn btn--primary btn--lg"
              >
                {HERO_DATA.ctaPrimary.label}
              </AppLink>
              <AppLink
                href={HERO_DATA.ctaSecondary.href}
                className="btn btn--outline btn--lg"
              >
                {HERO_DATA.ctaSecondary.label}
              </AppLink>
            </div>
            <div className="hero__trust">
              {HERO_DATA.trustIndicators.map((text) => (
                <div key={text} className="hero__trust-item">
                  <Icon name="check" className="icon icon--primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero__image-wrap">
            <div className="hero__image-bg" />
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={IMAGE_SIZES}
              className="hero__image"
              priority
            />
            <Image
              src={hoverImage.src}
              alt={hoverImage.alt}
              width={image.width}
              height={image.height}
              sizes={IMAGE_SIZES}
              className="hero__image-hover"
            />
            <span className="hero__image-label">{hoverImage.label}</span>
            <div className="hero__badge-float">
              <div className="hero__badge-icon">
                <Icon name="plus" className="icon icon--secondary" />
              </div>
              <div>
                <p className="hero__stat-number">{stats.number}</p>
                <p className="hero__stat-label">{stats.label}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
