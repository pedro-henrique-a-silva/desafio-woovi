import { Box, Button, MenuItem, TextField } from '@mui/material'
import InputCartao from './ui/InputCartao'
import InputCpf from './ui/InputCpf'
import InputValidade from './ui/InputValidade'
import InputNome from './ui/InputNome'
import { useContext, useState } from 'react'
import context from '../context/context'
import { currencyFormatter } from '../utils/currencyFormatter'
import { useNavigate } from 'react-router-dom'



function FormCartao() {
  const {selectedValue, valorOriginal} = useContext(context)

  const defaultParcelas = selectedValue > 1 
    ?`${selectedValue - 1} x ${currencyFormatter(valorOriginal / selectedValue)}` 
    : `${selectedValue} x ${currencyFormatter(valorOriginal)}`

  const defaultValues = {
    nome: "",
    cpf: "",
    cartao: "",
    validade: "",
    cvv: "",
    parcelas: defaultParcelas
  
  }
  const [formValues, setFormValues] = useState(defaultValues)
  const [formError, setFormError] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
    setFormError(false)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formularioValido = Object.values(formValues).every((value) => value !== "");

    if(formularioValido){
      navigate('/confirmacao')
      return
    }
    
    setFormValues(defaultValues)
    setFormError(true)
    console.log("Formulario invalido")
  }

  const onlyLetters = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const char = String.fromCharCode(event.which);
    const regex = /^[a-zA-Z\u00C0-\u00FF\s]*$/;
    const specialKeys = [8, 37, 39, 46];

    if (!regex.test(char) && !specialKeys.includes(event.keyCode)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputNome 
        fullWidth
        error={formError}
        onKeyDown={onlyLetters}
        name="nome"
        onChange={handleChange}
        value={formValues.nome}
        size="small" 
        sx={{marginBottom: "10px"}} 
        label="Nome completo" 
        variant="outlined"
      />
      <InputCpf 
        fullWidth
        name="cpf"      
        error={formError}
        size="small" 
        onChange={handleChange}
        value={formValues.cpf}
        sx={{marginBottom: "10px"}} 
        label="CPF" 
        variant="outlined" 
      />
      <InputCartao 
        fullWidth 
        size="small"
        error={formError} 
        name="cartao"
        onChange={handleChange}
        value={formValues.cartao}
        sx={{marginBottom: "10px"}} 
        label="Número do Cartão" 
        variant="outlined" 
      />
      <Box
        display="flex"
        justifyContent="space-between"
        marginBottom="10px"      
      >
        <InputValidade 
          sx={{width: "45%"}} 
          size="small"
          error={formError}
          onChange={handleChange}
          value={formValues.validade}
          name="validade"
          label="Vencimento" 
          variant="outlined" 
        />
        <TextField 
          sx={{width: "45%"}} 
          size="small"
          error={formError}
          onChange={handleChange}
          value={formValues.cvv}
          name="cvv"
          label="CVV" 
          variant="outlined" 
        />
      </Box>
      <TextField
          fullWidth
          select
          sx={{marginBottom: "10px"}}
          label="Parcelas"
          size="small"
          error={formError}
          onChange={handleChange}
          value={formValues.parcelas}
          name="parcelas"
          defaultValue={defaultParcelas}
          helperText="Selecione a quantidade de parcelas"
        >
            <MenuItem value={defaultParcelas}>
              {defaultParcelas}
            </MenuItem>
        </TextField>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            type="submit"
            variant="contained" 
            sx={{backgroundColor: "#133A6F", color: "#fff", width: "100%"}} 
          >
              Pagar
          </Button>
        </Box>
    </form>
  )
}

export default FormCartao