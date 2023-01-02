import { useContext } from "react"
import { NotificationContext } from "./context"
import { NotificationProps, NotificationType } from "."

type NotifyProps = Pick<NotificationProps, "title" | "description" | "timeout">


export const useNotification = () => {
  const { add, remove } = useContext(NotificationContext)

  const makeNotification = (type: NotificationType) => (
    (props: NotifyProps) => (add({ ...props, type }))
  );
  return {
    add,
    remove,
    success: makeNotification("success"),
    info: makeNotification("info"),
    warning: makeNotification("warning"),
    error: makeNotification("error"),
  }
}
