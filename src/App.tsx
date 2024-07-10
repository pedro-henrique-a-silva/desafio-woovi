import { Route, Routes } from "react-router-dom"
import PagamentoPix from "./pages/PagamentoPix"
import PagamentoCartao from "./pages/PagamentoCartao"
import Parcelamento from "./pages/Parcelamento"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Parcelamento/>}></Route>
        <Route path="/pagamento-pix" element={<PagamentoPix/>}></Route>
        <Route path="/pagamento-cartao" element={<PagamentoCartao />}></Route>
      </Routes>
    </>
  )
}

export default App
