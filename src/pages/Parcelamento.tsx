import { Box, Container, Grid, Typography } from "@mui/material"
import Logo from "../components/logo/Logo"
import Parcela from "../components/Parcela";
import { useState } from "react";
import { FooterParcelas } from "../components/ui/ComponentsParcelamento";
import { VerifiedUser } from "@mui/icons-material";

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
        </Grid>
      </Container>
      <FooterParcelas>
      <Box
          display="flex"
          alignItems="center"
          gap={1}
          justifyContent="center"
        >
          <VerifiedUser sx={
            {
              color:"#B2B2B2"
            }
          }/>
          <Typography fontSize={12}>Pagamento 100% seguro via:</Typography>
          <Logo height="50" width="50" fill="#B2B2B2"/>
        </Box>
      </FooterParcelas>
    </>
  )
}

export default Parcelamento