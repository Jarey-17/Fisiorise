import { LEAD_MAGNET_DATA } from "@/constants";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import LeadForm from "./LeadForm";

export default function LeadMagnet() {
  const { formBox } = LEAD_MAGNET_DATA;

  return (
    <section id={LEAD_MAGNET_DATA.id} className="lead">
      <div className="container">
        <div className="lead__box">
          <div className="lead__grid">
            <Reveal className="lead__content">
              <h2 className="lead__title">{LEAD_MAGNET_DATA.title}</h2>
              <p className="lead__desc">
                {LEAD_MAGNET_DATA.description}
                <strong>{LEAD_MAGNET_DATA.descriptionBold}</strong>
                {LEAD_MAGNET_DATA.descriptionEnd}
              </p>
              <ul className="lead__list">
                {LEAD_MAGNET_DATA.benefits.map((benefit) => (
                  <li key={benefit} className="lead__item">
                    <div className="lead__check">
                      <Icon name="check" className="icon icon--white" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="lead__form-wrap">
              <span className="lead__form-badge">{formBox.badge}</span>
              <h3 className="lead__form-title">{formBox.title}</h3>
              <p className="lead__form-subtitle">{formBox.subtitle}</p>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
