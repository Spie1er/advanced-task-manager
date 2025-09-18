import { PropsWithChildren, useEffect } from "react";
import { ModalProps } from "./modal.types";
import { modalContainerStyles } from "./modal.styles";
import { X } from "lucide-react";
import { Button } from "../button";
import { twMerge } from "tailwind-merge";

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  onClose,
  isOpen,
  body,
  size,
  unScrollable,
  closeOnBackdropClick,
  title,
  closable = true,
  footer,
}) => {
  useEffect(() => {
    if (unScrollable) {
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, unScrollable]);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-5"
      onClick={handleBackdropClick}
    >
      <div
        className={twMerge(modalContainerStyles({ size }), "modal-enter")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-tusky-green/30 flex items-center justify-between border-b p-5">
          {typeof title === "string" ? (
            <h2 className="text-tusky-peach text-lg font-bold">{title}</h2>
          ) : (
            title
          )}
          {closable && (
            <Button
              onClick={onClose}
              type="secondary"
              className="rounded-full p-2"
              text={<X size="16" />}
              size="sm"
            />
          )}
        </div>

        <div className="p-5">{body}</div>

        {footer && (
          <div className="border-tusky-green/30 border-t p-5">{footer}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
