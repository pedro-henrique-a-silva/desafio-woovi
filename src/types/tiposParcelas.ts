export type ParcelaInfo = {
    parcela: number,
    valorTotal: number
}

export type ParcelaProps = {
  parcelas: ParcelaInfo,
  selectedValue: number,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}