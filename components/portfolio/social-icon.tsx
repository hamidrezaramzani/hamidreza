import { cn } from "@/lib/utils";

type SocialIconProps = {
  id: string;
  className?: string;
};

export function SocialIcon({ id, className }: SocialIconProps) {
  const common = cn("shrink-0", className);

  switch (id) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.374 6.839 9.727.5.094.683-.223.683-.496 0-.245-.01-1.052-.014-1.91-2.782.62-3.369-1.208-3.369-1.208-.454-1.181-1.11-1.495-1.11-1.495-.908-.637.069-.624.069-.624 1.003.072 1.532 1.057 1.532 1.057.892 1.568 2.341 1.115 2.91.853.091-.662.35-1.115.636-1.372-2.22-.259-4.555-1.139-4.555-5.068 0-1.12.39-2.035 1.029-2.752-.103-.26-.447-1.302.098-2.714 0 0 .84-.276 2.75 1.051A9.33 9.33 0 0 1 12 6.912a9.33 9.33 0 0 1 2.504.346c1.909-1.327 2.747-1.051 2.747-1.051.547 1.412.203 2.454.1 2.714.64.717 1.028 1.632 1.028 2.752 0 3.939-2.338 4.806-4.566 5.06.359.317.679.943.679 1.901 0 1.373-.012 2.48-.012 2.816 0 .276.18.595.688.494C19.138 20.623 22 16.788 22 12.253 22 6.586 17.523 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M21.5 3.3 2.9 10.7c-1.3.5-1.3 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8 1 .8.6 0 .9-.3 1.2-.6l2.3-2.3 4.8 3.5c.9.5 1.5.2 1.7-.8L22.9 4.7c.3-1.2-.4-1.7-1.4-1.4ZM9.4 14.2l-.3 3.7 1.5-1.9 7.3-6.6c.3-.3-.1-.4-.5-.2l-9 5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5ZM17.2 7.3a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z"
            fill="currentColor"
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V8H4Zm16 2.4-7.4 4.6a1 1 0 0 1-1.2 0L4 10.4V16h16V10.4Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}
