import { SERVICES_DATA } from "@/constants";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { staggerDelay } from "@/lib/reveal";

export default function Services() {
  return (
    <section id={SERVICES_DATA.id} className="services">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            {SERVICES_DATA.title}
            <span className="text-primary">{SERVICES_DATA.titleHighlight}</span>
          </h2>
          <p className="section-desc">{SERVICES_DATA.description}</p>
        </Reveal>

        <div className="services__grid">
          {SERVICES_DATA.list.map((service, index) => (
            <Reveal
              key={service.title}
              className="service-card"
              delay={staggerDelay(index)}
            >
              <div
                className={`service-card__icon service-card__icon--${service.tone}`}
              >
                <Icon
                  name={service.icon}
                  className={`icon icon--${service.tone}`}
                />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
