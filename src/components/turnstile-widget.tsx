import { useTurnstile } from "@/lib/turnstile";

interface TurnstileWidgetProps {
  onToken: (token: string) => void;
  className?: string;
}

export function TurnstileWidget({ onToken, className = "" }: TurnstileWidgetProps) {
  const { containerRef, token, expired, loading, refresh } = useTurnstile();

  if (token) {
    onToken(token);
  }

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <div ref={containerRef} className="w-fit" />
      {expired && (
        <div className="flex items-center gap-2 text-sm text-amber-600">
          <span>Verifica scaduta. Clicca di nuovo la checkbox.</span>
          <button
            type="button"
            onClick={refresh}
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
          >
            Riprova
          </button>
        </div>
      )}
      {loading && !token && !expired && (
        <span className="text-xs text-gray-400">Caricamento verific…</span>
      )}
    </div>
  );
}
