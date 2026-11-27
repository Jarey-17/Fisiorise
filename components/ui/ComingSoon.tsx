import { COMING_SOON_LABEL } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import Icon from "@/components/ui/Icon";

interface ComingSoonProps {
  title: string;
  text: string;
  action?: { href: string; label: string };
  className?: string;
}

/** Aviso "Llegará pronto" para funciones que aún no tienen backend. */
export default function ComingSoon({
  title,
  text,
  action,
  className,
}: ComingSoonProps) {
  return (
    <div className={className ? `coming-soon ${className}` : "coming-soon"}>
      <span className="coming-soon__badge">
        <Icon name="clock" size={16} />
        {COMING_SOON_LABEL}
      </span>
      <h3 className="coming-soon__title">{title}</h3>
      <p className="coming-soon__text">{text}</p>
      {action && (
        <AppLink href={action.href} className="btn btn--primary btn--sm">
          {action.label}
        </AppLink>
      )}
    </div>
  );
}
