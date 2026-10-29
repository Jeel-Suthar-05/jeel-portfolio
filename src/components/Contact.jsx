import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { contact } from "../data/portfolio";

const initialValues = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Add a subject of at least 3 characters.";
  if (values.message.trim().length < 20) errors.message = "Write at least 20 characters so the message is useful.";
  return errors;
}

const channels = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "Email", href: contact.email ? `mailto:${contact.email}` : "" },
];

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function onChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length > 0) return;

    if (!contact.formEndpoint) {
      setStatus({
        type: "info",
        message: "Your details look good. This message was not sent, because email delivery is not connected yet.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setValues(initialValues);
      setStatus({ type: "success", message: "Message sent. Thank you — I will reply when I can." });
    } catch {
      setStatus({ type: "error", message: "The message could not be sent. Please try again, or use the links above." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="border-t border-white/10 py-20" aria-labelledby="contact-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-xs tracking-[0.18em] text-accent">// END_OF_TRANSMISSION</p>
        <div className="hover-card mt-8 grid gap-8 rounded-2xl border border-accent/40 p-6 sm:p-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 id="contact-heading" className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let's build something reliable.
            </h2>
            <p className="mt-4 max-w-xl text-base text-subtle">
              Open to Python, automation, and backend roles. Ping me on any channel below.
            </p>
            <p className="mt-8 font-mono text-sm tracking-[0.16em] text-accent">CHANNELS</p>
            <ul className="mt-3 space-y-2">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    className="inline-flex items-center gap-2 font-mono text-sm tracking-[0.12em] text-white uppercase hover:text-accent"
                    {...(channel.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer noopener" })}
                  >
                    {channel.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-3 sm:grid-cols-2">
              <Field id="name" label="Name" name="name" value={values.name} error={errors.name} onChange={onChange} autoComplete="name" />
              <Field id="email" label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={onChange} autoComplete="email" />
              <div className="sm:col-span-2">
                <Field id="subject" label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={onChange} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="font-mono text-sm tracking-[0.14em] text-subtle">
                  MESSAGE
                </label>
                <textarea id="message" name="message" rows={4} value={values.message} onChange={onChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className="field mt-2" />
                {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-300">{errors.message}</p> : null}
              </div>
              <button type="submit" className="btn btn-primary font-mono text-sm tracking-[0.14em] sm:col-span-2" disabled={submitting}>
                <Send size={14} aria-hidden="true" />
                {submitting ? "SENDING" : "SEND_MESSAGE"}
              </button>
              <div className="min-h-6 sm:col-span-2" aria-live="polite">
                {status ? <p className={`text-sm ${status.type === "error" ? "text-red-300" : "text-subtle"}`}>{status.message}</p> : null}
              </div>
            </form>
          </div>

          <aside className="hover-card h-fit rounded-xl border border-white/10 bg-black/30 p-5">
            <p className="font-mono text-sm tracking-[0.16em] text-subtle">STATUS</p>
            <p className="mt-4 flex items-center gap-2 font-mono text-sm text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              OPEN_TO_WORK
            </p>
            <p className="mt-4 font-mono text-xs text-subtle">UTC: +05:30</p>
            <p className="mt-6 text-base leading-relaxed text-subtle">{contact.email}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, ...props }) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="font-mono text-sm tracking-[0.14em] text-subtle uppercase">
        {label}
      </label>
      <input id={id} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className="field mt-2" {...props} />
      {error ? <p id={errorId} className="mt-2 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
