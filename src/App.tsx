import { useNotification } from "./Notification/hook"

function App() {
  const notify = useNotification();
  return (
    <div className="App">
      <h1>Notifications</h1>
      <button onClick={() => {
        notify.success({
          title: "Pedido realizado",
          description: "Pedido 65540 gerado com suceso!",
          timeout: 3000
        })
      }} >Open Sucess Notification</button>
      <button onClick={() => {
        notify.info({
          title: "Newsletter cadastrada",
          description: "Obrigado por inscrever-se!"
        })
      }} >Open Info Notification</button>
      <button onClick={() => {
        notify.warning({
          title: "Carrinho atualizado",
          description: "Um de seus itens sofreu uma atualização."
        })
      }} >Open Warning Notification</button>
      <button onClick={() => {
        notify.error({
          title: "Produto sem estoque",
          description: "Não existe estoque disponível para o produto selecionado."
        })
      }} >Open Error Notification</button>
    </div >
  )
}

export default App

