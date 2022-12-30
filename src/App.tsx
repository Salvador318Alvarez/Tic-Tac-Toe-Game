import { Box, Container, Typography } from "@mui/material"
import Game from "./components/TicTacToe/Game"

function App() {

  return (
  <>
  <Typography 
                    variant="h3" 
                    align="center"
                    component="h1"
                    gutterBottom
                    sx={{marginTop:"5%"}}>
                    Tic Tac Toe
            </Typography>
        <Container fixed sx={{display:'flex', justifyContent: "center", alignItems:"center"}}>
            
            <Box sx={{width:300, height:300, textAlign:"center", alignItems:"stretch"}}>
                 <Game />
            </Box>
        </Container>
  </>
  )
}

export default App
