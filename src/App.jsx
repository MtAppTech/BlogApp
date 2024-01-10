import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#454F5B",
      },
      secondary: {
        main: "#454F5B",
        second: "#161C24",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
      deneme
        
      </ThemeProvider>
    </>
  )
}
export default App;
