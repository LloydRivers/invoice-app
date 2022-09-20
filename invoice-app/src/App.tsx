import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsLightTheme } from "./features/slices/themeSlice/themeSlice";
import { lightTheme, darkTheme } from "./Themes/theme";
import Routing from "./Routes/Routing";

import "App.css";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
