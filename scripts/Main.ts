// Equivalente TS de la lógica que en React vivía en useState (Navbar.tsx)
// y en el cálculo de FOOTER_DATA.copyright (constants/index.ts)

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  setCopyrightYear();
  initLeadForm();
});

/**
 * Maneja el toggle del menú móvil (antes: const [isOpen, setIsOpen] = useState(false))
 */
function initMobileMenu(): void {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  if (!menuBtn || !mobileMenu || !iconOpen || !iconClose) return;

  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle("hidden", !isOpen);
    iconOpen.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al hacer click en un link (mejora UX en mobile)
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      isOpen = false;
      mobileMenu.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });
}

/**
 * Equivalente a: `© ${new Date().getFullYear()} ${APP_DATA.name}...`
 */
function setCopyrightYear(): void {
  const el = document.getElementById("copyright-year");
  if (!el) return;
  const year = new Date().getFullYear();
  el.textContent = `© ${year} Dra. Dina Reyes. Todos los derechos reservados.`;
}

/**
 * Equivalente a onSubmit={(e) => e.preventDefault()} en LeadMagnet.tsx
 */
function initLeadForm(): void {
  const form = document.getElementById("lead-form") as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    // TODO: conectar con tu endpoint/servicio de email marketing
  });
}
