import { Box } from "@mui/material";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <Box sx={{
      width: "100%", '@media (min-width: 820px)': {
        width: '100%'
      }
    }}>
      <Header />
      <Table />
    </Box>
  );
}

export default App;
