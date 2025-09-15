import { useEffect, useState } from "react";
import "../styles/Toast.css";

type ToastProps = {
  message: string | null;
  duration?: number;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 1500, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) return;

    setVisible(true);
    const t1 = setTimeout(() => setVisible(false), duration);

    const TRANSITION_MS = 200;
    const t2 = setTimeout(() => onClose?.(), duration + TRANSITION_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };

  }, [message, duration, onClose]);

  if (!message) return null;

  return <div className={`toast ${visible ? "toastShow" : ""}`}>{message}</div>;
}

export default Toast;
