import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface Props {
  label: string;
  language: string;
  code: string;
}

export default function CodeBlock({ label, language, code }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-base-900">
      <div className="flex items-center justify-between border-b border-white/10 bg-base-700 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyber-emerald/70" />
          </span>
          <span className="ml-2 font-mono text-xs text-slate-400">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-cyber-blue/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyber-blue">
            {language}
          </span>
          <button
            onClick={copy}
            className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-cyber-emerald" /> Copié
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copier
              </>
            )}
          </button>
        </div>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-slate-300">{code}</code>
      </pre>
    </div>
  );
}
