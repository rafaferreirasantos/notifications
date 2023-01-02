import { AiOutlineCloseCircle } from 'react-icons/ai'
import "./index.css"
import { useEffect, useState } from "react";


export type NotificationType = "info" | "warning" | "error" | "success"

export interface NotificationProps {
  id: string;
  title: string;
  description: string;
  type: NotificationType;
  timeout?: number;
  onClose?: VoidFunction
}

export const Notification = ({
  id,
  title,
  description,
  type = 'info',
  timeout = 5000,
  onClose }
  : NotificationProps) => {
  useEffect(() => {
    if (timeout) {
      const timeoutId = setTimeout(handleClose, timeout)
      return () => clearTimeout(timeoutId)
    }
  }, [])

  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    setClosing(true);
  }

  const handleAnimationEnd = () => {
    if (closing) onClose?.()
  }
  const notificationClass = `notification notification-${type} notification-${closing ? 'closing' : ''}`

  return (
    <div className={notificationClass} onAnimationEnd={handleAnimationEnd}>
      <AiOutlineCloseCircle onClick={handleClose} className="notification__close-button"></AiOutlineCloseCircle>
      <h3 className="notification__title">{title}</h3>
      {description ? <p className="notification__description">{description}</p> : null}
    </div>
  )
}