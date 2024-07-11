import { useState } from "react"
import Context from "./context"

type ContextProviderProps = {
  children: React.ReactNode;
}

function Provider({ children }: ContextProviderProps) {
  const [nome, setNome] = useState('João')
  const [selectedValue, setSelectedValue] = useState(1)
  const [valorOriginal, setValorOriginal] = useState(30500.00);
  const parcelas = new Array(7).fill(0).map((_, index) => ({
      parcela: index + 1,
      valorTotal: index + 1 == 1 ? 30500.00 : (30500.00 + ((index + 1) * (30500.00 * 0.0041))),
    }))

  const trocaNome = (nome: string) => {
    setNome(nome)
  }

  const trocaValorOriginal = (valor: number) => {
    setValorOriginal(valor)
  }


  const trocaSelectecValue = (value: number) => {
    setSelectedValue(value)
  }

  const contextProvider = {
    nome,
    parcelas,
    selectedValue,
    valorOriginal,
    trocaNome,
    trocaSelectecValue,
    trocaValorOriginal
  }

  return (
   <Context.Provider value={contextProvider}>
      {children}
    </Context.Provider>
  )
}

export default Provider