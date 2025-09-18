export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  size?: "small" | "medium" | "large";
  unScrollable?: boolean;
  closeOnBackdropClick?: boolean;
  title?: string | React.ReactNode;
  withHeader?: boolean;
  closable?: boolean;
  footer?: React.ReactNode;
  body: React.ReactNode;
};
