import { Box } from "@mui/material";
// import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(160deg ,rgba(204,204,255,1),blue,black)",
        position: "relative",
      }}
    >
      {/* <Navbar /> */}
      <Registration />
    </Box>
  );
}

export default App;
