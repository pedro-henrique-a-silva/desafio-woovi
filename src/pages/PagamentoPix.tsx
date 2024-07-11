import { Box, Container, Grid, Typography } from "@mui/material"
import Logo from "../components/logo/Logo"
import { BoxQRPix, ButtonCopyPix } from "../components/ui/ComponentsPagamentoPix"
import { ContentCopy, ExpandLess } from "@mui/icons-material"
import Footer from "../components/Footer"

function PagamentoPix() {
  return (
    <>
       <Container>
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          mb={3}
          justifyContent="center"
        >
          <Logo height="50" width="140" fill="#03D69D"/>
        </Box>
      </Container>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          mb={3}
          textAlign={"center"}
          justifyContent="center"
        >
          <Typography variant="h6">
            João, pague a entrada de
            R$ 15.300,00 pelo Pix
          </Typography>
        </Box>
      </Container>

      <Container sx={{margin: 0, padding: 0}}>
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
            <Box
              textAlign={"center"}
              sx={{marginTop: "10px", marginBottom: "10px"}}
            >
              <Typography 
                variant="body2" 
                component="p" 
                sx={{ color: "#B2B2B2", }}
              >
                Prazo para pagamento:
              </Typography>

              <Typography
                variant="body2" 
                component="p" 
                sx={{ fontWeight: "bold"}}
              >
                15/12/2021 - 08:17
              </Typography>
            </Box>

            <Container sx={{margin: 0, padding: 0}}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  padding: "5px 10px",
                }}
              >
                <Typography variant="body2" component="p">1ª entrada no Pix</Typography>
                <Typography variant="body2" component="p" sx={{fontWeight: "bold"}}>R$ 15.300,00</Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  padding: "5px 10px",
                }}
              >
                <Typography variant="body2" component="p">2ª no cartão</Typography>
                <Typography variant="body2" component="p" sx={{fontWeight: "bold"}}>R$ 15.300,00</Typography>
              </Box>
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
                <Typography variant="body2" component="p" sx={{fontSize: ".8rem",}}>Total: R$ 30.600,00</Typography>
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

              <Box
                display="flex"
                alignItems="center"
                flexDirection={"column"}
                justifyContent="space-between"
                sx={{
                  margin: "10px 0",
                }}
              >
                <Typography variant="body2" component="p" sx={{fontSize: ".8rem", color: "#B2B2B2"}}>
                  Identificador:
                </Typography>
                <Typography variant="body2" component="p" sx={{fontSize: ".8rem", fontWeight: "bold"}}>2c1b951f356c4680b13ba1c9fc889c47</Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default PagamentoPix