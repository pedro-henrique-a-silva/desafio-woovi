import { ExpandLess } from "@mui/icons-material"
import { Box, Container, Typography } from "@mui/material"
import { useContext } from "react"
import context from "../context/context"
import Identificador from "./Identificador"

function ParcelasPagar() {
  const {parcelas, selectedValue, valorOriginal} = useContext(context)

  return (
    <Container sx={{margin: 0, padding: 0}}>
        {parcelas.filter((p) => p.parcela <= selectedValue)
          .map((p) => (
          <Box
            key={p.parcela}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              padding: "5px 10px",
            }}
          >
            <Typography variant="body2" component="p">
              {p.parcela === 1 && `${p.parcela}ª entrada no Pix`}
              {p.parcela !== 1 && `${p.parcela}ª no cartão`}
            </Typography>
            <Typography variant="body2" component="p" sx={{fontWeight: "bold"}}>R$ {(p.valorTotal / selectedValue).toFixed(2).replace('.', ',')}</Typography>
          </Box>)
        )}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            padding: "10px 4px",
            borderTop: "1px solid #B2B2B2",
            borderBottom: "1px solid #B2B2B2",
          }}
        >
          <Typography variant="body2" component="p" sx={{fontSize: ".8rem",}}>CET: 0,5%</Typography>
          <Typography variant="body2" component="p" sx={{fontSize: ".8rem",}}>Total: R$ {valorOriginal}</Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            padding: "10px 4px",
            borderBottom: "1px solid #B2B2B2",
          }}
        >
          <Typography variant="body2" component="p" sx={{fontSize: ".8rem", fontWeight: "bold"}}>Como funciona?</Typography>
          <ExpandLess/>
        </Box>
       <Identificador />
      </Container>
  )
}

export default ParcelasPagar