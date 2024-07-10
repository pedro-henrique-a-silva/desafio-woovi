import { Box, Container, Grid, Radio, Typography } from "@mui/material"
import Logo from "../components/logo/Logo"
import { BoxParcela, BoxPixTag } from "../components/ComponentsParcelamento"
import { useState } from "react";

function Parcelamento() {
  const [selectedValue, setSelectedValue] = useState('1x');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const qtdParcelas = 7;
  const valorOriginal = 30500;
  const parcelas = new Array(qtdParcelas).fill(0).map((_, index) => ({
    parcela: index + 1,
    valorTotal: index + 1 == 1 ? valorOriginal : valorOriginal + ((index + 1) * (valorOriginal * 0.0041)),
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
              <BoxParcela 
                display="flex"
                position="relative"
                alignItems="center"
                mb={p.parcela === 1 ? 6 : 0}
              >
                <Typography mr={2} variant="h6" component="p">
                  {p.parcela} X
                </Typography>
                <Typography variant="body1" component="p">
                   R$ {p.valorTotal}
                </Typography>
                {p.parcela === 1 && <BoxPixTag><p>Pix</p></BoxPixTag>}
                {p.parcela === 2 && <BoxPixTag><p>Pix Parcelado</p></BoxPixTag>}

                <Radio
                  checked={selectedValue === `${p.parcela}x`}
                  onChange={handleChange}
                  value={`${p.parcela}x`}
                  name="radio-buttons"
                />
              </BoxParcela>
            </Grid>
          )
          )}
        </Grid>
      </Container>
    </>
  )
}

export default Parcelamento