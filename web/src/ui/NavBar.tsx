import { ChevronLeft } from 'lucide-react';
import type { ReactNode } from 'react';

export function NavBar({ backLabel, onBack, title, right, hairline = false, className = '' }: {
    backLabel?: string;
    onBack?:    () => void;
    title?:     string;
    right?:     ReactNode;
    hairline?:  boolean;
    className?: string;
}) {
    return (
        <div className={`relative flex h-11 shrink-0 items-center gap-2 px-2 ${className}`}>
            {/* Equal side slots keep the title centred without letting translated labels overlap it. */}
            <div className="flex min-w-0 flex-1">
                {onBack && (
                    <button
                        type="button"
                        onClick={onBack}
                        aria-label={backLabel}
                        title={backLabel}
                        className="relative z-10 flex min-w-0 max-w-full items-center gap-0.5 text-[17px] text-ios-blue active:opacity-60"
                    >
                        <ChevronLeft className="h-[22px] w-[22px] shrink-0" strokeWidth={2.5} />
                        {backLabel && <span className="truncate">{backLabel}</span>}
                    </button>
                )}
            </div>
            {title && (
                <div className="pointer-events-none min-w-0 max-w-[60%] shrink-0">
                    <span title={title} className="block truncate text-[17px] font-semibold text-black dark:text-white">{title}</span>
                </div>
            )}
            <div className="flex min-w-0 flex-1 justify-end overflow-hidden text-ios-blue [&>*]:min-w-0 [&>*]:truncate">
                {right}
            </div>
            {hairline && <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-control" />}
        </div>
    );
}
