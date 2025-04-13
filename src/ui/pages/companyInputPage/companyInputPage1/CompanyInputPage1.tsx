import React from "react";
import { Container, Stack, Button } from "@mui/material";
import FormContainer from "../common/FormContainer";
import IndustryInput from "@/ui/pages/companyInputPage/companyInputPage1/IndustryInput";
import FacilityInput from "@/ui/pages/companyInputPage/companyInputPage1/FacilityInput";

function CompanyInputPage1() {
  return (
    <Container sx={{ mt: 6 }}>
      <Stack spacing={4}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <FormContainer>
            <IndustryInput />
            <FacilityInput />
            <Stack direction="row" justifyContent="flex-end">
              <Button variant="contained" color="primary" size="large">
                다음
              </Button>
            </Stack>
          </FormContainer>
        </Stack>
      </Stack>
    </Container>
  );
}

export default CompanyInputPage1;
