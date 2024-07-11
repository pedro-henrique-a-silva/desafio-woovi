import { Box, Typography } from '@mui/material'

function Identificador() {
  return (
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
  )
}

export default Identificador