import { Box, Typography } from '@mui/material'
import { VerifiedUser } from '@mui/icons-material'
import Logo from './logo/Logo'
import { FooterParcelas } from './ui/ComponentsFooter'

function Footer() {
  return (
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
  )
}

export default Footer