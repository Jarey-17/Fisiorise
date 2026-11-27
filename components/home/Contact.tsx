import { CONTACT_DATA, CONTACT_SECTION_DATA as DATA } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import Icon, { WhatsAppIcon } from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

/** Agenda tu cita (#contacto): solo enlaces, no necesita backend. */
export default function Contact() {
  return (
    <section id={DATA.id} className="contact">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            {DATA.title}
            <span className="text-primary">{DATA.titleHighlight}</span>
          </h2>
          <p className="section-desc">{DATA.description}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact-card contact-card--highlight" delay={1}>
            <div className="contact-card__icon">
              <WhatsAppIcon size={28} />
            </div>
            <h3 className="contact-card__title">{DATA.whatsapp.title}</h3>
            <p className="contact-card__text">{DATA.whatsapp.text}</p>
            <p className="contact-card__value">{CONTACT_DATA.phone}</p>
            <AppLink
              href={CONTACT_DATA.whatsappUrl}
              className="btn btn--primary btn--sm"
            >
              {DATA.whatsapp.cta}
            </AppLink>
          </Reveal>

          <Reveal className="contact-card" delay={2}>
            <div className="contact-card__icon">
              <Icon name="desktop" className="icon icon--primary" />
            </div>
            <h3 className="contact-card__title">{DATA.online.title}</h3>
            <p className="contact-card__text">{DATA.online.text}</p>
            <AppLink
              href={CONTACT_DATA.onlineWhatsappUrl}
              className="btn btn--outline btn--sm"
            >
              {DATA.online.cta}
            </AppLink>
          </Reveal>

          <Reveal className="contact-card" delay={3}>
            <div className="contact-card__icon">
              <Icon name="mail" className="icon icon--primary" />
            </div>
            <h3 className="contact-card__title">{DATA.email.title}</h3>
            <p className="contact-card__text">{DATA.email.text}</p>
            <AppLink href={CONTACT_DATA.emailUrl} className="contact-card__link">
              {CONTACT_DATA.email}
            </AppLink>
          </Reveal>
        </div>

        <Reveal className="contact__locations">
          <h3 className="contact__locations-title">
            <Icon name="mapPin" className="icon icon--primary" />
            {DATA.locationsTitle}
          </h3>
          <ul className="contact__location-list">
            {CONTACT_DATA.locations.map((location) => (
              <li key={location.label}>
                <AppLink href={location.mapUrl} className="contact__location">
                  {location.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
