import { Container, Grid } from "@mui/material"
import Header from "../components/Header"
import PrazoPagamento from "../components/PrazoPagamento"
import ParcelasPagar from "../components/ParcelasPagar"
import Footer from "../components/Footer"
import FormCartao from "../components/FormCartao"
import { useContext } from "react"
import context from "../context/context"

function PagamentoCartao() {
  const {selectedValue} = useContext(context)

  const defaultParcelas = selectedValue > 1 
    ? selectedValue - 1 
    : 1
  return (
    <>
       <Header 
          title={`João, pague o restante em ${defaultParcelas} x no cartão`}
        />
      <Container>
      <Grid 
          container 
          rowSpacing={1} 
          columnSpacing={{ xs: 0, sm: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 8 }}
        >
          <Grid item xs={4} >
            <FormCartao />
          </Grid>

          <Grid item xs={4}>
            <PrazoPagamento />
            <ParcelasPagar />
          </Grid>

        </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default PagamentoCartao