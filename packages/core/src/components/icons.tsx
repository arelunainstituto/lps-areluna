// Ícones de linha — traço fino, elegantes, herdam currentColor.
export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Phone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsApp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.3A10 10 0 1012 2zm0 1.8a8.2 8.2 0 016.9 12.6l.3.5-1 3.5-3.6-1 .5.3A8.2 8.2 0 1112 3.8zm-3.3 4c-.2 0-.5 0-.7.4-.3.4-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.2 5 4.4 2.5 1 3 .8 3.6.8.5 0 1.7-.7 2-1.4.2-.6.2-1.2.1-1.3l-.6-.3-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1-.4-.2-1.5-.6-2.8-1.7-1-.9-1.7-2-2-2.4-.1-.3 0-.4.2-.6l.4-.5.3-.5v-.5L8.7 8c-.2-.4-.4-.3-.5-.3z" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5l2.7 5.9 6.3.6-4.7 4.2 1.4 6.3L12 16.9 6 19.5l1.4-6.3L2.7 9l6.3-.6L12 2.5z" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
