import { Route, Routes } from "react-router-dom"
import PagamentoPix from "./pages/PagamentoPix"
import PagamentoCartao from "./pages/PagamentoCartao"
import Parcelamento from "./pages/Parcelamento"
import { CssBaseline } from "@mui/material"
import Confirmacao from "./pages/Confirmacao"

function App() {

  return (
    <>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<Parcelamento/>}></Route>
        <Route path="/pagamento-pix" element={<PagamentoPix/>}></Route>
        <Route path="/pagamento-cartao" element={<PagamentoCartao />}></Route>
        <Route path="/confirmacao" element={<Confirmacao />}></Route>
      </Routes>
    </>
  )
}

export default App
