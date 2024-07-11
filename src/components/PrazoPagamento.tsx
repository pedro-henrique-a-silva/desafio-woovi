import { Box, Typography } from '@mui/material'

function PrazoPagamento() {
  return (
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
  )
}

export default PrazoPagamento