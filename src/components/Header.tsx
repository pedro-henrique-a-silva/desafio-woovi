import { Box, Container, Typography } from "@mui/material"
import Logo from "./logo/Logo"

type HeaderProps = {
  title: string
}
function Header(props: HeaderProps) {
  const { title } = props
  return (
    <>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          mb={2}
          justifyContent="center"
        >
          <Logo height="50" width="140" fill="#03D69D"/>
        </Box>
      </Container>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          textAlign={"center"}
          mt={2}
          mb={2}
          justifyContent="center"
        >
          <Typography variant="h6">{title}</Typography>
        </Box>
      </Container> 
    </>
  )
}

export default Header