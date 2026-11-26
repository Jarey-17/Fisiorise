import Image from "next/image";
import { IMAGES, ROUTES, STORE_DATA } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import Icon from "@/components/ui/Icon";

export default function StoreHeader() {
  return (
    <header className="pos-header">
      <div className="pos-header__inner">
        <AppLink href={ROUTES.home} className="pos-header__back">
          <Icon name="chevronLeft" size={16} />
          {STORE_DATA.backLabel}
        </AppLink>
        <span className="pos-header__title">{STORE_DATA.headerTitle}</span>
        <Image
          className="pos-header__logo"
          src={IMAGES.isotype}
          alt={STORE_DATA.logoAlt}
          width={2298}
          height={2570}
        />
      </div>
    </header>
  );
}
