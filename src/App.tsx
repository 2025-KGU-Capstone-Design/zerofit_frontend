import { RouterProvider } from "react-router-dom";
import router from "@/common/router.ts";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/ui/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
