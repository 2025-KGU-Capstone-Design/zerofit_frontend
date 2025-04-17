import React from "react";
import { Stack } from "@mui/material";

const FormContainer = ({ children }: { children: React.ReactNode }) => (
  <Stack
    flex={2}
    spacing={3}
    sx={{
      p: 3,
      backgroundColor: "#FFFFFF",
      maxWidth: "800px",
      mb: 10,
    }}
  >
    {children}
  </Stack>
);

export default FormContainer;
