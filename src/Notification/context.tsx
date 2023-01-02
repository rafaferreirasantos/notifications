import { ReactNode, createContext, useState } from "react";
import { Notification, NotificationProps } from "../Notification"

type AddNotificationProps = Omit<NotificationProps, "id">

interface NotificationContextProps {
  add: (notification: AddNotificationProps) => string;
  remove: (id: string) => void
}
export const NotificationContext = createContext<NotificationContextProps>({
  add: (_notification: AddNotificationProps) => "",
  remove: (id: string) => { }
})

interface NotificationProviderProps {
  children: ReactNode;
}

const makeHash = () => Math.random().toString(36).slice(2, 10);

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const add = (notification: AddNotificationProps): string => {
    const id = makeHash();
    setNotifications((notifications) => [{ id, ...notification }, ...notifications])
    return id;
  }
  const remove = (id: string) => {
    setNotifications(notifications => notifications.filter(n => n.id !== id));
  }
  const value = {
    add,
    remove
  };
  return <NotificationContext.Provider value={value}>
    {children}
    <div className="notifications">
      {notifications.map(n => (
        <Notification key={n.id} {...n} onClose={() => remove(n.id)} />))
      }
    </div>
  </NotificationContext.Provider>
}