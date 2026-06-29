import {
    useEffect,
    useRef,
} from "react";
import type { ReactNode } from "react";
import ModalPortal from "./ModalPortal";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;

    children: ReactNode;

    title?: string;

    maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "4xl"
    | "6xl";

    closeOnBackdrop?: boolean;
}

const widths = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
};

export default function Modal({
    isOpen,
    onClose,
    children,
    title,
    maxWidth = "lg",
    closeOnBackdrop = true,
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useLockBodyScroll(isOpen);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () =>
            window.removeEventListener(
                "keydown",
                handleEscape
            );
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                onClick={() =>
                    closeOnBackdrop && onClose()
                }
            >
                <div
                    ref={modalRef}
                    onClick={(e) => e.stopPropagation()}
                    className={`
          bg-white
          dark:bg-zinc-900
          rounded-2xl
          shadow-2xl
          w-full
          ${widths[maxWidth]}
          overflow-hidden
          animate-in
          zoom-in-95
          duration-200
        `}
                >
                    {title && (
                        <div className="border-b px-6 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">
                                {title}
                            </h2>

                            <button
                                onClick={onClose}
                                className="text-2xl hover:text-red-500 transition"
                            >
                                ✕
                            </button>
                        </div>
                    )}

                    <div className="p-6">{children}</div>
                </div>
            </div>
        </ModalPortal>
    );
}