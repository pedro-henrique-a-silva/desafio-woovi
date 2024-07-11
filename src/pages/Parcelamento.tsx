import { Box, Container, Grid } from "@mui/material"
import Logo from "../components/logo/Logo"
import Parcela from "../components/Parcela";
import { useState } from "react";

function Parcelamento() {
 
  const [selectedValue, setSelectedValue] = useState('1x');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const qtdParcelas = 7;
  const valorOriginal = 30500.00;
  const parcelas = new Array(qtdParcelas).fill(0).map((_, index) => ({
    parcela: index + 1,
    valorTotal: index + 1 == 1 ? valorOriginal : (valorOriginal + ((index + 1) * (valorOriginal * 0.0041))),
  }));

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
          <Logo />
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
        </Grid>
      </Container>
    </>
  )
}

export default Parcelamento