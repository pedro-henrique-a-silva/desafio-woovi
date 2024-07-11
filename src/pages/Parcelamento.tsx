import { Box, Button, Container, Grid, Typography } from "@mui/material"
import Logo from "../components/logo/Logo"
import Parcela from "../components/Parcela";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Parcelamento() {
  const [selectedValue, setSelectedValue] = useState('1x');
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const qtdParcelas = 7;
  const valorOriginal = 30500.00;
  const parcelas = new Array(qtdParcelas).fill(0).map((_, index) => ({
    parcela: index + 1,
    valorTotal: index + 1 == 1 ? valorOriginal : (valorOriginal + ((index + 1) * (valorOriginal * 0.0041))),
  }));

  const handleClick = () => {
    navigate('/pagamento-pix')
  }

  return (
    <>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          mb={6}
          justifyContent="center"
        >
          <Logo height="50" width="140" fill="#03D69D"/>
        </Box>
      </Container>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          mb={6}
          justifyContent="center"
        >
          <Typography variant="h6">João, como você quer pagar?</Typography>
        </Box>
      </Container> 
    
      <Container>
        <Grid 
          container 
          // spacing={2}
          rowSpacing={0} 
          columnSpacing={{ xs: 0, sm: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {parcelas.map((p) => (
            <Grid item xs={4} key={p.parcela}>
              <Parcela 
                selectedValue={selectedValue} 
                handleChange={handleChange} 
                parcelas={p}
              />
            </Grid>
          )
          )}

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

export default Parcelamento