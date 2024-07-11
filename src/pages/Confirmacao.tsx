import { Check } from "@mui/icons-material"
import { Box, Container } from "@mui/material"
import Header from "../components/Header"
import { useContext } from "react"
import context from "../context/context"
import Footer from "../components/Footer"

function Confirmacao() {
  const {nome} = useContext(context)
  return (
    <>
    <Container>
      <Header 
          title={`${nome}, sua operação concluida com sucesso`}
        />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
      >
        <Check sx={{ 
            color: "#fff", 
            backgroundColor: "#03D69D",
            height: "50px",
            width: "50px",
            borderRadius: "50%", 
          }} 
        />
      </Box>
    </Container>
    <Footer/>
    </>
  )
}

export default Confirmacao