import { Box, Button, Container, Grid } from "@mui/material"
import { BoxQRPix, ButtonCopyPix } from "../components/ui/ComponentsPagamentoPix"
import { ContentCopy } from "@mui/icons-material"
import Footer from "../components/Footer"
import { useContext } from "react"
import context from "../context/context"
import ParcelasPagar from "../components/ParcelasPagar"
import PrazoPagamento from "../components/PrazoPagamento"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import { currencyFormatter } from "../utils/currencyFormatter"

function PagamentoPix() {
  const {selectedValue, valorOriginal} = useContext(context);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/pagamento-cartao')
  }

  return (
    <>
       <Header 
          title={`João, pague a entrada de
            ${currencyFormatter(valorOriginal / selectedValue)} pelo Pix`}
        />
      <Container>
      <Grid 
          container 
          rowSpacing={1} 
          columnSpacing={{ xs: 0, sm: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          <Grid item xs={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={"column"}
            >
              <BoxQRPix
                display="flex"
                alignItems="center"
                textAlign={"center"}
                justifyContent="center"
                flexDirection={"column"}
                border={"1px solid #03D69D"}
              >
                <img src="image2.png"/>
              </BoxQRPix>
              <ButtonCopyPix variant="contained"  endIcon={<ContentCopy />}>
                Clique para copiar QR CODE
              </ButtonCopyPix>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <PrazoPagamento />
            <ParcelasPagar />
          </Grid>

          <Grid item xs={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button variant="contained" sx={{backgroundColor: "#133A6F", color: "#fff"}} onClick={handleClick}>Avançar</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default PagamentoPix