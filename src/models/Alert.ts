export type AlertType = {
  id?: string;
  label: string;
  duration?: number;
  onRemove?: () => void;
};
