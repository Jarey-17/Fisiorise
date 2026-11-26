import { CONTACT_DATA, FOOTER_DATA } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import Icon, { WhatsAppIcon } from "@/components/ui/Icon";

export default function Footer() {
  const { navigation, specialties, contact } = FOOTER_DATA;
  // Se evalúa al generar la página: el año se actualiza con cada despliegue.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Marca */}
          <div className="footer__brand">
            <span className="footer__name">{FOOTER_DATA.brandName}</span>
            <p className="footer__tagline">{FOOTER_DATA.description}</p>
            <AppLink
              href={CONTACT_DATA.whatsappUrl}
              className="btn btn--primary btn--sm footer__whatsapp-btn"
            >
              <WhatsAppIcon className="footer__whatsapp-icon" />
              {FOOTER_DATA.whatsappCta}
            </AppLink>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="footer__heading">{navigation.title}</h4>
            <ul className="footer__list">
              {navigation.links.map((link) => (
                <li key={link.label}>
                  <AppLink href={link.href} className="footer__link">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="footer__heading">{specialties.title}</h4>
            <ul className="footer__list">
              {specialties.links.map((link) => (
                <li key={link.label}>
                  <AppLink href={link.href} className="footer__link">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="footer__heading">{contact.title}</h4>
            <ul className="footer__list">
              <li className="footer__contact-item">
                <Icon name="mapPin" className="icon icon--primary" />
                <div className="footer__locations">
                  {contact.locations.map((location) => (
                    <AppLink
                      key={location.label}
                      href={location.mapUrl}
                      className="footer__link"
                    >
                      {location.label}
                    </AppLink>
                  ))}
                </div>
              </li>
              <li className="footer__contact-item">
                <Icon name="phone" className="icon icon--primary" />
                <AppLink
                  href={CONTACT_DATA.whatsappUrl}
                  className="footer__link"
                >
                  {contact.phoneLabel}
                </AppLink>
              </li>
              <li className="footer__contact-item">
                <Icon name="mail" className="icon icon--primary" />
                <AppLink href={CONTACT_DATA.emailUrl} className="footer__link">
                  {CONTACT_DATA.email}
                </AppLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {FOOTER_DATA.brandName}. {FOOTER_DATA.copyright}
          </p>
          <span className="footer__region">{FOOTER_DATA.regionNote}</span>
        </div>
      </div>
    </footer>
  );
}
