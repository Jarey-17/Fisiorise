"use client";

import type { FormEvent } from "react";
import { LEAD_MAGNET_DATA } from "@/constants";

export default function LeadForm() {
  const { formBox } = LEAD_MAGNET_DATA;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: conectar con tu endpoint/servicio de email marketing
  }

  return (
    <form id="lead-form" className="lead__form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="sr-only">
        {formBox.nameLabel}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder={formBox.namePlaceholder}
        className="lead__input"
      />
      <label htmlFor="email" className="sr-only">
        {formBox.emailLabel}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={formBox.emailPlaceholder}
        className="lead__input"
      />
      <button type="submit" className="btn btn--secondary btn--full">
        {formBox.btnText}
      </button>
      <p className="lead__form-note">{formBox.footerWarning}</p>
    </form>
  );
}
