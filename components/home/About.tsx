import Image from "next/image";
import { ABOUT_DATA } from "@/constants";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

/** Sección "Conóceme" (#nosotros). */
export default function About() {
  const { image } = ABOUT_DATA;

  return (
    <section id={ABOUT_DATA.id} className="about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__media">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 420px, 320px"
              className="about__image"
            />
            <ul className="about__stats">
              {ABOUT_DATA.stats.map((stat) => (
                <li key={stat.label} className="about__stat">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about__content" delay={1}>
            <span className="about__eyebrow">{ABOUT_DATA.eyebrow}</span>
            <h2 className="section-title about__title">
              {ABOUT_DATA.title}
              <span className="text-primary">{ABOUT_DATA.titleHighlight}</span>
            </h2>
            <p className="about__role">{ABOUT_DATA.role}</p>
            {ABOUT_DATA.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="about__text">
                {paragraph}
              </p>
            ))}

            <blockquote className="about__quote">«{ABOUT_DATA.quote}»</blockquote>

            <h3 className="about__training-title">
              <Icon name="academic" className="icon icon--primary" />
              {ABOUT_DATA.trainingTitle}
            </h3>
            <ul className="about__training">
              {ABOUT_DATA.training.map((item) => (
                <li key={item} className="about__chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
