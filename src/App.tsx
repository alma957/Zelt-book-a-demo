import "./App.css";
import {MaternityCalculator} from "./Forms/maternityCalculator";
import {Box} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Inter',
        textTransform: 'none',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <MaternityCalculator />
    </Box>
    </ThemeProvider>
  );
}

export default App;
