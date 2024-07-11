import { Box, Button, Container, Grid } from "@mui/material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import context from "../context/context";
import Parcelas from "../components/Parcelas";
import Header from "../components/Header";

function Parcelamento() {
  const { parcelas, selectedValue, trocaSelectecValue } = useContext(context)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    trocaSelectecValue(Number(event.target.value));
  };


  const handleClick = () => {
    navigate('/pagamento-pix')
  }

  return (
    <>
      <Header title="João, como você quer pagar?"/>
    
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
              <Parcelas 
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