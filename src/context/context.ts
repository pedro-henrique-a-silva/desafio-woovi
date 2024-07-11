import { createContext } from "react";
import { ParcelaInfo } from "../types/tiposParcelas";

type ContextType = {
  nome: string;
  parcelas: ParcelaInfo[];
  selectedValue: number;
  valorOriginal: number;
  trocaNome: (nome: string) => void;
  trocaSelectecValue: (value: number) => void;
  trocaValorOriginal: (valor: number) => void;
};

const context = createContext({} as ContextType);


export default context
